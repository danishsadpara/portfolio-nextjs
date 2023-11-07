import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      variant="outlined"
      sx={{ borderRadius: "10px" }}
      endIcon={<KeyboardArrowUpIcon />}
      onClick={scrollToTop}
    >
      Back to the top
    </Button>
  );
};

export default ScrollToTop;
