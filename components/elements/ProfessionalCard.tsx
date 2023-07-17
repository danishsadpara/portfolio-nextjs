import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent } from "@mui/material";
import { IData } from "../../utils/interface";

interface Props {
  data: IData;
}

const ProfessionalCard = ({ data }: Props) => {
  const { title, description, duration, degree } = data;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" component="div" mb={2}>
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>

      <CardActions>
        <Typography
          variant="caption"
          fontWeight="bold"
          component="div"
          color="primary"
          ml={1}
        >
          {duration ? duration : degree}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ProfessionalCard;
