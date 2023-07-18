import { Box, Grid, Stack, Typography, TextField, Button } from "@mui/material";
import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const SendMessage = () => {
  return (
    <Box p={5}>
      <Grid container spacing={5} flexDirection="column">
        <Grid item display="flex" flexDirection="row" gap={5}>
          <Stack>
            <Typography variant="body1" color="initial">
              Your name
            </Typography>
            <TextField id="outlined-multiline-static" rows={4} size="small" />
          </Stack>
          <Stack>
            <Typography variant="body1" color="initial">
              Your name
            </Typography>
            <TextField id="outlined-multiline-static" rows={4} size="small" />
          </Stack>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="initial">
            Message
          </Typography>
          <TextField
            id="message"
            multiline
            rows={4}
            fullWidth
            placeholder="your message here..."
          />
        </Grid>
      </Grid>
      <Stack pt={5} display={"inline-block"}>
        <Button
          variant="contained"
          sx={{ borderRadius: "10px" }}
          endIcon={<SendOutlinedIcon />}
        >
          send message
        </Button>
      </Stack>
    </Box>
  );
};

export default SendMessage;
