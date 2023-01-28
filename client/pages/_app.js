import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ChakraProvider } from "@chakra-ui/react";
import { Loading } from "../components/common/Loading";

const App = ({ Component, pageProps }) => {
  const clientRef = useRef(null);
  const getClient = () => {
    if (!clientRef.current)
      clientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      });
    return clientRef.current;
  };

  return (
    <ChakraProvider>
      <QueryClientProvider client={getClient()}>
        <Hydrate state={pageProps.dehydratedState}>
          <Loading />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

App.getServerSideProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getServerSideProps?.(ctx);
  return { pageProps };
};

export default App;
