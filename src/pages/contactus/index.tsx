import React, { useState } from "react";
import {
  Grid,
  Chip,
  Typography,
  Button,
  Box,
  Stack,
  Tooltip,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactUsPage = () => {
  const [tooltipText, setTooltipText] = useState("Copy email");

  const handleCopy = () => {
    setTooltipText("Email copied");
    setTimeout(() => {
      setTooltipText("Copy email");
    }, 2000); // 2 seconds
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Grid item xs={12}>
        <Chip label="Contact" />
        <Typography variant="h3" fontWeight="bold" my={1}>
          Let's talk!
        </Typography>
      </Grid>
      <Grid item mt={5}>
        <Stack direction="row" spacing={10} alignItems="center">
          <Button
            variant="outlined"
            sx={{
              borderRadius: "10px",
              color: "#25D366",
              borderColor: "#25D366",
            }}
            startIcon={<WhatsAppIcon />}
          >
            WhatsApp
          </Button>
          <Stack direction="column" alignItems="center" spacing={1}>
            <SendOutlinedIcon />
            <Typography variant="body1" color="initial">
              Email:
            </Typography>
            <Typography variant="body1" color="#25D366">
              danishsadpara@gmail.com
            </Typography>
            <CopyToClipboard text="danishsadpara@gmail.com" onCopy={handleCopy}>
              <Tooltip title={tooltipText}>
                <ContentCopyOutlinedIcon sx={{ cursor: "pointer" }} />
              </Tooltip>
            </CopyToClipboard>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ContactUsPage;
