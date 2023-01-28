import { useMutation, useQueryClient } from "react-query";

import {
  QueryKeys,
  fetcher,
  findTargetMsgIndex,
  getNewMessages,
} from "../queryClient";
import { DELETE_MESSAGE } from "../graphql/message";
import { MsgQueryData } from "../types";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

const useDeleteMessage = () => {
  const client = useQueryClient();
  const { query } = useRouter();
  const userId = (query.userId || query.userid || "") as string;
  const toast = useToast();

  const { mutate: onDelete } = useMutation(
    (id: string) => fetcher(DELETE_MESSAGE, { id, userId }),
    {
      onSuccess: ({ deleteMessage: deletedId }) => {
        client.setQueryData<MsgQueryData>(QueryKeys.MESSAGES, (old) => {
          if (!old) return { pages: [{ messages: [] }], pageParams: "" };
          const { pageIndex, msgIndex } = findTargetMsgIndex(
            old.pages,
            deletedId
          );
          if (pageIndex < 0 || msgIndex < 0) return old;

          const newMsgs = getNewMessages(old);
          newMsgs.pages[pageIndex].messages.splice(msgIndex, 1);
          return newMsgs;
        });
        toast({
          title: "Content has been deleted.",
          status: "success",
          isClosable: true,
        });
      },
    }
  );

  return { onDelete };
};

export default useDeleteMessage;
