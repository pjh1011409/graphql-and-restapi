import { useMutation, useQueryClient } from "react-query";
import { QueryKeys, fetcher } from "../queryClient";
import { CREATE_MESSAGE } from "../graphql/message";
import { MsgQueryData } from "../types";
import { useRouter } from "next/router";
import { useCustomToast } from "./useCustomToast";

const useCreateMessage = () => {
  const client = useQueryClient();
  const { query } = useRouter();
  const userId = (query.userId || query.userid || "") as string;
  const toast = useCustomToast();

  const { mutate: onCreate } = useMutation(
    ({ text }: { text: string }) => fetcher(CREATE_MESSAGE, { text, userId }),
    {
      onSuccess: ({ createMessage }) => {
        client.setQueryData<MsgQueryData>(QueryKeys.MESSAGES, (old) => {
          if (!old)
            return { pages: [{ messages: [createMessage] }], pageParams: "" };
          return {
            pageParams: old.pageParams,
            pages: [
              { messages: [createMessage, ...old.pages[0].messages] },
              ...old.pages.slice(1),
            ],
          };
        });
        toast({
          title: "Content has been posted.",
          status: "success",
          isClosable: true,
        });
      },
      onError: () => {
        toast({
          title: "You must enter the content.",
          status: "warning",
          isClosable: true,
        });
      },
    }
  );
  return { onCreate };
};

export default useCreateMessage;
