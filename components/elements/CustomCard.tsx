import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, CardActions, CardContent } from "@mui/material";
import { IData } from "../../utils/interface";

interface Props {
  data: IData;
}

const CustomCard = ({ data }: Props) => {
  const { title, description, duration, degree } = data;

  return (
    <Box
      border={0.5}
      borderRadius={3}
      borderColor="lightblue"
      sx={{
        "&:hover": {
          bgcolor: "#ECF9FF",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" component="div">
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>

      <Typography my={1} ml={2} fontWeight="bold" color="primary">
        {degree ? degree : duration}
      </Typography>
    </Box>
  );
};

export default CustomCard;
