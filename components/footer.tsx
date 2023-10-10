import React from "react";
import { Box, Link } from "@mui/material";
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
        bottom: 0,
        left: 0,
        width: "100%",
        height: "6rem",
        backdropFilter: "blur(10px)", // Glassmorphic blur effect
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Glassmorphic shadow
      }}
    >
      <Box sx={{ flexGrow: 1 }} />

      <Link
        href="https://www.instagram.com/danishsadpara"
        target="_blank"
        rel="noopener"
        sx={{
          mx: 2,
          "& svg": {
            color: "#C13584", // Instagram logo color
          },
        }}
      >
        <InstagramIcon />
      </Link>
      <Link
        href="https://github.com/danishsadpara"
        target="_blank"
        rel="noopener"
        sx={{
          mx: 2,
          "& svg": {
            color: "#211F1F", // GitHub logo color
          },
        }}
      >
        <GitHubIcon />
      </Link>
    </Box>
  );
};

export default Footer;
