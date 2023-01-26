import { request, RequestDocument } from "graphql-request";
import { DocumentNode } from "graphql/language/ast";
import { Message, MsgQueryData } from "./types";

// const URL = "http://localhost:8000/graphql";
const URL = "https://graphql-blog.herokuapp.com";

export const fetcher = (
  query: RequestDocument,
  variables: { [key: string]: any } = {}
) =>
  request(`${URL}/graphql`, query, variables, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": URL,
  });

export const QueryKeys = {
  MESSAGES: "MESSAGES",
  MESSAGE: "MESSAGE",
  USERS: "USERS",
  USER: "USER",
};

export const findTargetMsgIndex = (
  pages: { messages: Message[] }[],
  id: string
) => {
  let msgIndex = -1;
  const pageIndex = pages.findIndex(({ messages }) => {
    msgIndex = messages.findIndex((msg) => msg.id === id);
    if (msgIndex > -1) {
      return true;
    }
    return false;
  });
  return { pageIndex, msgIndex };
};

export const getNewMessages = (old: MsgQueryData) => ({
  pageParams: old.pageParams,
  pages: old.pages.map(({ messages }) => ({ messages: [...messages] })),
});
