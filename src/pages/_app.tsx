import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "@/store/store";
import "@/styles/globals.css";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Bank dashboard</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
