import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import CustomCard from "../../../components/elements/CustomCard";
import { IData } from "../../../utils/interface";

interface Props {
  academicData: IData[];
  title: string;
}

const Academic = ({ academicData, title }: Props) => {
  return (
    <Box px={10}>
      <Typography variant="h5" color="initial" fontWeight="bold">
        {title}
      </Typography>
      <Grid container columnSpacing={10} rowSpacing={2} pt={2}>
        {academicData.map((data, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CustomCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Academic;
