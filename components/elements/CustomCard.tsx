import React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardActions, CardContent } from "@mui/material";
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

      <CardActions>
        {title === "Academic" && (
          <Typography
            variant="caption"
            fontWeight="bold"
            component="div"
            color="primary"
            ml={1}
          >
            {degree}
          </Typography>
        )}
        {title === "Professional" && (
          <Typography
            variant="caption"
            fontWeight="bold"
            component="div"
            color="primary"
            ml={1}
          >
            {duration}
          </Typography>
        )}
      </CardActions>
    </Box>
  );
};

export default CustomCard;
