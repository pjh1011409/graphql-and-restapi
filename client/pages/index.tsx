import React from "react";
import MsgList from "../components/MsgList";
import { fetcher } from "../queryClient";
import { GET_MESSAGES } from "../graphql/message";
import { Message } from "../types";
import Button from "../components/common/Button";
import tw from "twin.macro";
import Link from "next/link";

const styles = {
  title: [tw`text-4xl font-extrabold text-shadow-xl`],
  container: ({ center }: { center: boolean }) => [
    tw`grid justify-center h-32 `,
    center ? tw`items-center` : tw`flex p-10`,
  ],
};

const Home = ({ smsgs }: { smsgs: Message[] }) => (
  <>
    <div css={styles.container({ center: true })}>
      <div css={styles.title}>PJH's Blog</div>
    </div>
    <div css={styles.container({ center: false })}>
      <Link href="/">
        <Button variant="MainBtn">HOME</Button>
      </Link>
      <Link href={`?userId=roy`}>
        <Button variant="MainBtn">Roy</Button>
      </Link>
      <Link href={`?userId=jay`}>
        <Button variant="MainBtn">Jay</Button>
      </Link>
    </div>
    <MsgList smsgs={smsgs} />
  </>
);

export const getServerSideProps = async () => {
  const { messages: smsgs } = await fetcher(GET_MESSAGES);
  return {
    props: { smsgs },
  };
};

export default Home;
