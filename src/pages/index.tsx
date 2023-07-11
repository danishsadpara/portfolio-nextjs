import React from "react";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
// import Link from "next/link";
import Image from "next/image";
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
               <Chip
            label="Hi! I am  "
            size="small"
            
          />
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
              }}
            >
              M Murtaza Danish
            </Typography>
       
          <Typography variant="caption"  
           sx={{
                color:"darkcyan"
              }}>
 MERN stack developer
          </Typography>

          {/* <Link
          href={"https://www.behance.net/danishsadpara?locale=en_US"}
          target="blank"
        >
          Portfolio
        </Link> */}

          <Box mt={2}>
            <Button variant="outlined" sx={{ borderRadius: "50px" }} >
              Contact me
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: "50px", ml: "20px" }}
            >
              Download CV
            </Button>
          </Box>
        </Box>
        <Box style={{ position: 'relative' }}>
    <Box style={{ position: 'absolute', top: 0, left: 0, width: '450px', height: '485px', backgroundImage: `url('/main.png')`, backgroundSize: 'cover' }} />
    <Image
      src="/bgmain.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item>sdjlfjsd</Grid>
      </Grid>
    </>
  );
};

export default Index;
