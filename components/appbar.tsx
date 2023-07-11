import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

const GlassmorphicAppBar = styled(AppBar)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px 0 rgba(31, 38, 135, 0.05);
`;

const GlassyButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 12px 0 rgba(31, 38, 135, 0.04);
  color: black;
  margin-right: 10px;
  &:hover {
    background: rgba(255, 225, 255, 0.3);
  }
`;

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
              flexGrow: 1,
              mr: 2,
              fontFamily: "roboto",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            danishsadpara
          </Typography>
          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            {user && <GlassyButton onClick={handleLogout}>Logout</GlassyButton>}
          </Box>
        </Toolbar>
      </Container>
    </GlassmorphicAppBar>
  );
}

export default ResponsiveAppBar;
