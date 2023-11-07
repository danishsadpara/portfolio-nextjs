// LearningSection.tsx

import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export type BulletPointsSchema = {
  heading: string;
  points: string[];
};

export type LearningSchema = {
  heading: string;
  description: string;
  bulletPoints: BulletPointsSchema;
  code: string;
};

type LearningProps = {
  schema: LearningSchema;
};

const LearningSection: React.FC<LearningProps> = ({ schema }) => {
  return (
    <div>
      <Typography variant="h4">{schema.heading}</Typography>
      <Typography
        variant="body1"
        style={{ borderLeft: "2px solid #ccc", paddingLeft: "16px" }}
      >
        {schema.description}
      </Typography>
      <Typography variant="h5">{schema.bulletPoints.heading}</Typography>
      <List>
        {schema.bulletPoints.points.map((point, index) => (
          <ListItem key={index}>{point}</ListItem>
        ))}
      </List>
      <Typography variant="h5">Code:</Typography>
      <pre>
        <code>{schema.code}</code>
      </pre>
    </div>
  );
};

export default LearningSection;
