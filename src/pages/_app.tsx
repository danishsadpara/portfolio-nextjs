import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
import ResponsiveAppBar from "../../components/appbar";
import Footer from "../../components/footer";
import React from "react";
import { Box } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box bgcolor={"#F5F7F7"}>
      <UserProvider>
        <ResponsiveAppBar />
        <Box m={10}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </UserProvider>
    </Box>
  );
}
