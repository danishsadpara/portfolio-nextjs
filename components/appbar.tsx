import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { GlassmorphicAppBar } from "./elements/GlassyAppBar";

function ResponsiveAppBar() {
  const router = useRouter();
  const { user } = useUser(); // Move useUser inside the component

  const handleLogout = () => {
    router.push("/api/auth/logout");
  };

  return (
    <GlassmorphicAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              color: "black",
              textDecoration: "none",
            }}
          >
            danishsadpara
          </Typography>
          <Button component="a" href="/learningCurve" variant="outlined">
            LEARNINGS{" "}
          </Button>
          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            {user && (
              <Button
                variant="outlined"
                onClick={handleLogout}
                sx={{ borderRadius: "50px" }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </GlassmorphicAppBar>
  );
}

export default ResponsiveAppBar;
