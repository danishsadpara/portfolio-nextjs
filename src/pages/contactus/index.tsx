import React from "react";
import { Grid, Chip, Typography, Button, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const ContactUsPage = () => {
  return (
    <Grid>
      <Grid item xs={12} textAlign="center">
        <Chip label="Contact" />
        <Typography variant="h3" fontWeight="bold" my={1}>
          Let's talk!
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "10px",
                color: "#25D366",
                borderColor: "#25D366",
              }}
              startIcon={<WhatsAppIcon />}
              endIcon={null}
            >
              WhatsApp
            </Button>
          </Grid>
          <Grid item>
            <Box
              textAlign="center"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <SendOutlinedIcon />
              <Typography variant="body1" color="initial">
                Email:
              </Typography>
              <Typography variant="caption" color="initial">
                danishsadpara@gmail.com
              </Typography>
              <ContentCopyOutlinedIcon />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUsPage;
