import { AppProps } from "next/app";
import ResetCss from "@/styles/ResetCss";
import GlobalCss from "@/styles/GlobalCss";
import { Provider } from "next-auth/client";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <ResetCss />
      <GlobalCss />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
