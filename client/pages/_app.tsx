import '@component/styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...props } = pageProps;
  return (
    <SessionProvider session={session}>
      <Component {...props} />
    </SessionProvider>
  );
}