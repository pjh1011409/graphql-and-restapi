import React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { Message } from "../types";
import tw from "twin.macro";
import {
  useGetMessage,
  useCreateMessage,
  useUpdateMessage,
  useDeleteMessage,
} from "../hooks";

const styles = {
  ListLayout: [tw`grid justify-center `],
};

const MsgList = ({ smsgs }: { smsgs: Message[] }) => {
  const { query } = useRouter();
  const userId = (query.userId || query.userid || "") as string;
  const [msgs, setMsgs] = useState([{ messages: smsgs }]);
  // const [editingId, setEditingId] = useState<string | null>(null);
  const fetchMoreEl = useRef<HTMLDivElement>(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);

  const { data, error, isError, fetchNextPage, hasNextPage } = useGetMessage();
  const { onCreate } = useCreateMessage();
  const { editingId, setEditingId, onUpdate } = useUpdateMessage();
  const { onDelete } = useDeleteMessage();

  useEffect(() => {
    if (!data?.pages) return;
    setMsgs(data.pages);
  }, [data?.pages]);

  if (isError) {
    console.error(error);
    return null;
  }

  useEffect(() => {
    if (intersecting && hasNextPage) fetchNextPage();
  }, [intersecting, hasNextPage]);

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul css={styles.ListLayout}>
        {msgs.map(({ messages }, pageIndex) =>
          messages.map((x) => (
            <MsgItem
              key={pageIndex + x.id}
              {...x}
              onUpdate={onUpdate}
              onDelete={() => onDelete(x.id)}
              startEdit={() => setEditingId(x.id)}
              isEditing={editingId === x.id}
              myId={userId}
            />
          ))
        )}
      </ul>
      <div ref={fetchMoreEl} />
    </>
  );
};

export default MsgList;
