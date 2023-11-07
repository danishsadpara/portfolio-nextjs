import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Career from "./career/index";
import Portfolio from "./portfolio";
import Skills from "./skills";
import ContactUsPage from "./contactus";
import SendMessage from "./message";
import HeroSection from "./heroSection";
import ScrollToTop from "../../components/elements/ScrollToTop";

const Index = () => {
  return (
    <Box mx={10} mt={5}>
      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12}>
          <HeroSection />
        </Grid>
        <Grid item xs={12}>
          <Career />
        </Grid>
        <Grid item xs={12}>
          <Portfolio />
        </Grid>
        <Grid item xs={12}>
          <Skills />
        </Grid>
        <Grid item xs={12}>
          <ContactUsPage />
        </Grid>
        <Grid item xs={12} textAlign="right">
          <ScrollToTop />
        </Grid>
        <Grid item xs={12} textAlign="left">
          <SendMessage />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
