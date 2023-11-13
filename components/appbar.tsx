import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { GlassmorphicAppBar } from "./elements/GlassyAppBar";
import { AppBar, Avatar } from "@mui/material";

function ResponsiveAppBar() {
  const router = useRouter();
  const { user } = useUser(); // Move useUser inside the component

  const handleLogout = () => {
    router.push("/api/auth/logout");
  };

  return (
    <AppBar>
      <Box sx={{ flexGrow: 1 }}>
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
          <Avatar>DS</Avatar>
        </Typography>
      </Box>

      <Button
        component="a"
        href="/learningCurve"
        variant="outlined"
        size="small"
      >
        LEARNINGS
      </Button>
      <Box>
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
    </AppBar>
  );
}

export default ResponsiveAppBar;
