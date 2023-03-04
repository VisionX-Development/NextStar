import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import { StoreProvider } from "easy-peasy";
import GlobalState from "../store/GlobalState";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <NextUIProvider>
        <GlobalStyles>
          <Head>
            <title>StaR</title>
          </Head>
          <StoreProvider store={GlobalState}>
            <Component {...pageProps} />
          </StoreProvider>
        </GlobalStyles>
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
