import React, { useEffect } from "react";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Image from "next/image";
import Career from "./career/index";
import Portfolio from "./portfolio";
import Skills from "./skills";
import ContactUsPage from "./contactus";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SendMessage from "./message";

const Index = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/api/auth/login");
    }
  }, [isLoading, user, router]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box mx={10}>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        height="100vh"
      >
        <Box textAlign="start">
          <Chip label="Hi! I am" size="small" />
          <Typography variant="h2" fontWeight="bold">
            M Murtaza Danish
          </Typography>
          <Typography variant="caption" sx={{ color: "darkcyan" }}>
            MERN stack developer
          </Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <Button variant="outlined" sx={{ borderRadius: "50px" }}>
              Contact me
            </Button>
            <Button variant="contained" sx={{ borderRadius: "50px" }}>
              Download CV
            </Button>
          </Stack>
        </Box>
        <Box position="relative">
          <Box
            position="absolute"
            top={0}
            left={0}
            width="450px"
            height="485px"
            sx={{
              backgroundImage: `url('/smain.png')`,
              backgroundSize: "cover",
            }}
          />
          <Image
            src="/bgmain.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Box>
      </Box>
      <Stack alignItems="center">
        <Career />
      </Stack>
      <Stack alignItems="center" mt={10}>
        <Portfolio />
      </Stack>
      <Stack alignItems="center" mt={10}>
        <Skills />
      </Stack>
      <Stack alignItems="center" mt={10}>
        <ContactUsPage />
      </Stack>
      <Stack alignItems="flex-end" mt={10}>
        <Button
          variant="outlined"
          sx={{ borderRadius: "10px" }}
          endIcon={<KeyboardArrowUpIcon />}
          onClick={scrollToTop}
        >
          Back to the top
        </Button>
      </Stack>
      <Stack alignItems="flex-start" mt={10}>
        <SendMessage />
      </Stack>
    </Box>
  );
};

export default Index;
