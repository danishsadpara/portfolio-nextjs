import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const GlassmorphicContainer = styled(Box)`
  background: linear-gradient(180deg, #ffffff 10%, #d1e1ff 90%);
  border-radius: 12px;
  padding: 2rem;
  margin: auto;
  max-width: 600px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactUsPage = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("Your response is sent successfully!");
    console.log("Message:", message);
  };

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        backgroundColor: "#F5F7FA",
        pt: 7,
      }}
    >
      <Box sx={{ flex: "1 0 auto", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <GlassmorphicContainer>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>
              For any inquiries or collaborations, feel free to reach out to us!
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                mb: 2,
              }}
            >
              <TextField
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{ mb: 2, width: "100%" }}
                value={message}
                onChange={handleMessageChange}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" onClick={handleSendMessage}>
                  Send
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <img
                src="/world.png"
                alt="Location"
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </Box>
            <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
              Our Location
            </Typography>
          </GlassmorphicContainer>
        </Box>
      </Box>
      <Box
        sx={{
          flex: "0 0 auto",
          padding: "1rem",
          backgroundColor: "#f5f7fa",
          textAlign: "center",
        }}
      >
        Footer
      </Box>
    </Box>
  );
};

export default ContactUsPage;
