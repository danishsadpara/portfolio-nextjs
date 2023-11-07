import React from "react";
import LearningSection, { LearningSchema } from "./LearningSection";
import learningData from "./learningData.json";

const index = () => {
  return (
    <div>
      {learningData.map((schema, index) => (
        <LearningSection key={index} schema={schema} />
      ))}
    </div>
  );
};

export default index;
