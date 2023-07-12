import React from "react";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
// import Link from "next/link";
import Image from "next/image";
import Career from "./career/index";
const Index = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoading && !user) {
      router.push("/api/auth/login");
    }
  }, [isLoading, user, router]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Chip label="Hi! I am  " size="small" />
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
            }}
          >
            M Murtaza Danish
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: "darkcyan",
            }}
          >
            MERN stack developer
          </Typography>

          <Box mt={2}>
            <Button variant="outlined" sx={{ borderRadius: "50px" }}>
              Contact me
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                ml: "20px",
              }}
            >
              Download CV
            </Button>
          </Box>
        </Box>
        <Box style={{ position: "relative" }}>
          <Box
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "450px",
              height: "485px",
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
      <Grid container spacing={2} px={10}>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            py={5}
            sx={{ backgroundColor: "#E2F4EC", borderRadius: "15px" }}
          >
            <Typography variant="h4" fontWeight="bold">
              Developer
            </Typography>
            <Typography variant="caption">Lorem, ipsum.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            py={5}
            sx={{ backgroundColor: "#E2F4EC", borderRadius: "15px" }}
          >
            <Typography variant="h4" fontWeight="bold">
              Developer
            </Typography>
            <Typography variant="caption">Lorem, ipsum.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            py={5}
            sx={{ backgroundColor: "#E2F4EC", borderRadius: "15px" }}
          >
            <Typography variant="h4" fontWeight="bold">
              Developer
            </Typography>
            <Typography variant="caption">Lorem, ipsum.</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        sx={{ bgcolor: "#E2F4EC", borderRadius: 3, m: 10, py: 5 }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h3" fontWeight="bold">
            Demo
          </Typography>

          <Typography variant="caption">sub-demo</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h3" fontWeight="bold">
            Demo
          </Typography>

          <Typography variant="caption">sub-demo</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h3" fontWeight="bold">
            Demo
          </Typography>

          <Typography variant="caption">sub-demo</Typography>
        </Box>
      </Box>
      <Career />
    </>
  );
};

export default Index;
