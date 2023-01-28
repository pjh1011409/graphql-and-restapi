import dayjs from "dayjs";
import { Mutate, User } from "../types";
import MsgInput from "./MsgInput";
import React from "react";
import tw, { css } from "twin.macro";
import Button from "./common/Button";

const styles = {
  postCard: [
    tw`list-none my-3 border-2 border-black rounded-xl p-3`,
    css`
      width: 350px;
      box-shadow: 5px 5px 3px 3px gray;
    `,
  ],
  User: [tw`text-lg font-bold mr-1`],
};
interface MsgItemProps {
  id: string;
  timestamp: number;
  text: string;
  myId: string;
  user: User;
  isEditing: boolean;
  onUpdate: Mutate;
  startEdit: () => void;
  onDelete: () => void;
  userId: string;
}

const MsgItem = ({
  id,
  timestamp,
  text,
  onUpdate,
  onDelete,
  isEditing,
  startEdit,
  myId,
  user,
  userId,
}: MsgItemProps) => (
  <li css={styles.postCard}>
    <div css={tw`flex items-center`}>
      <div css={styles.User}>{userId}</div>
      <sub>{`${dayjs(timestamp).format("YYYY-MM-DD HH:mm")}`}</sub>
    </div>

    {isEditing ? (
      <>
        <MsgInput mutate={onUpdate} text={text} id={id} />
      </>
    ) : (
      text
    )}

    {myId === userId && (
      <div className="messages__buttons">
        <Button variant="CardBtn" onClick={startEdit}>
          Update
        </Button>
        <Button variant="CardBtn" onClick={onDelete}>
          Delete
        </Button>
      </div>
    )}
  </li>
);

export default MsgItem;
