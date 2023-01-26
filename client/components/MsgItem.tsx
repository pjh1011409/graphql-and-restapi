import dayjs from "dayjs";
import { Mutate, User } from "../types";
import MsgInput from "./MsgInput";

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
  <li className="messages__item">
    <h3>
      {userId}
      <sub>{`${dayjs(timestamp).format("YYYY-MM-DD HH:mm")}`}</sub>
    </h3>

    {isEditing ? (
      <>
        <MsgInput mutate={onUpdate} text={text} id={id} />
      </>
    ) : (
      text
    )}

    {myId === userId && (
      <div className="messages__buttons">
        <button onClick={startEdit}>수정</button>
        <button onClick={onDelete}>삭제</button>
      </div>
    )}
  </li>
);

export default MsgItem;
