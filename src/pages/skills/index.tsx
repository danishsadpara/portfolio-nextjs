import React from "react";
import { Grid, Chip, Typography } from "@mui/material";
import { technologies } from "../../../utils/imagesUrl";

const Skills = () => {
  return (
    <Grid container spacing={5} textAlign="center">
      <Grid item xs={12} textAlign="center">
        <Chip label="Skills | Tools" />
        <Typography variant="h3" fontWeight="bold" mt={2}>
          Technologies and Skills
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="initial">
          Technologies with which I mostly work
        </Typography>
      </Grid>
      <Grid
        item
        container
        rowSpacing={5}
        justifyContent="center"
        alignItems="center"
      >
        {technologies.map((technology, index) => (
          <Grid item key={index} ml={2}>
            <img src={technology} alt={`Technology ${index}`} width="40px" />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Skills;
