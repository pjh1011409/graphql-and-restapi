import { Resolver } from "../types";
import { db } from "../firebase";
import {
  addDoc,
  collection,
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
import { start } from "repl";

const userResolver: Resolver = {
  Query: {
    users: async (parent, args) => {
      const users = collection(db, "users");
      const userSnap = await getDocs(users);
      const data: DocumentData[] = [];
      userSnap.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return data;
    },
    user: async (parent, { id }) => {
      const snapshot = await getDoc(doc(db, "users", id));
      console.log(snapshot.data());
      return {
        ...snapshot.data(),
        id: snapshot.id,
      };
    },
  },
};

export default userResolver;
