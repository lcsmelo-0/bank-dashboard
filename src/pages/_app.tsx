import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import "@/styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <Head>
        <title>Bank dashboard</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
