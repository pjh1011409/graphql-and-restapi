import { Resolver } from "../types";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  startAfter,
  updateDoc,
  where,
} from "firebase/firestore";
// const setMsgs = (data: Message[]) => writeDB(DBField.MESSAGES, data);

const PAGE_SIZE = 15;

const messageResolver: Resolver = {
  Query: {
    messages: async (parent, { cursor = "" }) => {
      const messages = collection(db, "messages");
      const user = collection;
      const queryOptions = [];
      if (cursor) {
        const snapshot = await getDoc(doc(db, "messages", cursor));
        queryOptions.push(startAfter(snapshot));
      }
      const q = query(messages, ...queryOptions, limit(PAGE_SIZE));
      const snapshot = await getDocs(q);
      const data: DocumentData[] = [];
      snapshot.forEach((doc) =>
        data.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      return data;
    },
    message: async (parent, { id = "" }) => {
      const snapshot = await getDoc(doc(db, "messages", id));
      return { ...snapshot.data(), id: snapshot.id };
    },
  },
  Mutation: {
    createMessage: async (parent, { text, userId }) => {
      if (!userId) throw Error("사용자가 없습니다.");
      if (!text) throw Error("입력한 텍스트가 없습니다.");
      const newMsg = {
        text,
        userId,
        createdAt: serverTimestamp(),
      };
      const result = await addDoc(collection(db, "messages"), newMsg);
      const snapshot = await getDoc(result);
      return { ...snapshot.data(), id: snapshot.id };
    },
    updateMessage: async (parent, { id, text, userId }) => {
      const msgRef = doc(db, "messages", id);
      if (!msgRef) throw Error("메시지가 없습니다.");
      await updateDoc(msgRef, {
        text,
        userId,
        createdAt: serverTimestamp(),
      });
      const snap = await getDoc(msgRef);
      return {
        ...snap.data(),
        id: snap.id,
      };
    },
    deleteMessage: async (parent, { id }) => {
      const msgRef = doc(db, "messages", id);
      if (!msgRef) throw "메시지가 없습니다.";
      await deleteDoc(msgRef);
      return id;
    },
  },
};

export default messageResolver;
