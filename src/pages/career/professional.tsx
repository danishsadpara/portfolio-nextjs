import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import ProfessionalCard from "../../../components/elements/ProfessionalCard";
import { IData } from "../../../utils/interface";

interface Props {
  professionalData: IData[];
  title: string;
}

const Professional = ({ professionalData, title }: Props) => {
  return (
    <Box px={10}>
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Grid container columnSpacing={10} rowSpacing={2} pt={2}>
        {professionalData.map((data, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ProfessionalCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Professional;
