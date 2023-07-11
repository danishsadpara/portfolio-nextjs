import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        // position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "6rem",
        backdropFilter: "blur(10px)", // Glassmorphic blur effect
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Glassmorphic shadow
      }}
    >
      <Typography variant="body1" color="black" sx={{ mx: 2 }}>
        @danishsadpara
      </Typography>
      <Box sx={{ flexGrow: 1 }} /> {/* Empty box for flexible spacing */}
      <Link href="mailto:example@example.com" sx={{ mx: 2 }}>
        <EmailIcon />
      </Link>
      <Link
        href="https://www.instagram.com/example"
        target="_blank"
        rel="noopener"
        sx={{ mx: 2 }}
      >
        <InstagramIcon />
      </Link>
      <Link
        href="https://github.com/example"
        target="_blank"
        rel="noopener"
        sx={{ mx: 2 }}
      >
        <GitHubIcon />
      </Link>
    </Box>
  );
};

export default Footer;
