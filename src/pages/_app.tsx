import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
import ResponsiveAppBar from "../../components/appbar";
import Footer from "../../components/footer";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ResponsiveAppBar />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}
