import { useInfiniteQuery } from "react-query";
import { QueryKeys, fetcher } from "../queryClient";
import { GET_MESSAGES } from "../graphql/message";

const useGetMessage = () => {
  const { data, error, isError, fetchNextPage, hasNextPage } = useInfiniteQuery(
    QueryKeys.MESSAGES,
    ({ pageParam = "" }) => fetcher(GET_MESSAGES, { cursor: pageParam }),
    {
      getNextPageParam: ({ messages }) => {
        return messages?.[messages.length - 1]?.id;
      },
    }
  );

  return { data, error, isError, fetchNextPage, hasNextPage };
};

export default useGetMessage;
