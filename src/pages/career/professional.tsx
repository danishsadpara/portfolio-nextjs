import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { IData } from "../../../utils/interface";
import CustomCard from "../../../components/elements/CustomCard";

interface Props {
  professionalData: IData[];
  heading: string;
}

const Professional = ({ professionalData, heading }: Props) => {
  return (
    <Box px={10}>
      <Typography variant="h5" fontWeight="bold">
        {heading}
      </Typography>
      <Grid container columnSpacing={10} rowSpacing={2} pt={2}>
        {professionalData.map((data, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CustomCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Professional;
