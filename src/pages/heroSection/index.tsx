import {
  Chip,
  Typography,
  Stack,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection={isSmallScreen ? "column" : "row"}
      alignItems="center"
      justifyContent={isSmallScreen ? "center" : "space-around"}
      // py={isSmallScreen ? 4 : 8}
    >
      <Box
        textAlign={isSmallScreen ? "center" : "start"}
        mb={isSmallScreen ? 4 : 0}
      >
        <Chip label="Hi! I am" size="small" />
        <Typography variant="h2" fontWeight="bold">
          M Murtaza Danish
        </Typography>
        <Typography variant="caption" sx={{ color: "darkcyan" }}>
          MERN stack developer
        </Typography>
        <Stack direction={isSmallScreen ? "column" : "row"} spacing={2} mt={2}>
          <Button variant="outlined" sx={{ borderRadius: "50px" }}>
            Contact me
          </Button>
          <Button variant="contained" sx={{ borderRadius: "50px" }}>
            Download CV
          </Button>
        </Stack>
      </Box>
      <Box
        position="relative"
        width={isSmallScreen ? "300px" : "450px"}
        height={isSmallScreen ? "325px" : "485px"}
      >
        <Image
          src="/bgmain.png"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{
            backgroundImage: `url('/smain.png')`,
            backgroundSize: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
