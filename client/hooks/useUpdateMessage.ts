import { useMutation, useQueryClient } from "react-query";
import {
  QueryKeys,
  fetcher,
  findTargetMsgIndex,
  getNewMessages,
} from "../queryClient";
import { UPDATE_MESSAGE } from "../graphql/message";
import { MsgQueryData } from "../types";
import { useRouter } from "next/router";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const useUpdateMessage = () => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const client = useQueryClient();
  const { query } = useRouter();
  const userId = (query.userId || query.userid || "") as string;
  const toast = useToast();

  const { mutate: onUpdate } = useMutation(
    ({ text, id }: { text: string; id?: string }) =>
      fetcher(UPDATE_MESSAGE, { text, id, userId }),
    {
      onSuccess: ({ updateMessage }) => {
        doneEdit();
        client.setQueryData<MsgQueryData>(QueryKeys.MESSAGES, (old) => {
          if (!old) return { pages: [{ messages: [] }], pageParams: "" };

          const { pageIndex, msgIndex } = findTargetMsgIndex(
            old.pages,
            updateMessage.id
          );
          if (pageIndex < 0 || msgIndex < 0) return old;
          const newMsgs = getNewMessages(old);
          newMsgs.pages[pageIndex].messages.splice(msgIndex, 1, updateMessage);
          return newMsgs;
        });
        toast({
          title: "Content has been updated.",
          status: "success",
          isClosable: true,
        });
      },
    }
  );

  const doneEdit = () => setEditingId(null);

  return { editingId, setEditingId, onUpdate };
};

export default useUpdateMessage;
