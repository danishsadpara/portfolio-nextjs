import React from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";

const images = [
  "https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.jpg?s=612x612&w=0&k=20&c=bNqjdf8L-5igcRB89DdMgx0kNOmyeo1J_zzXmoxxl8w=",
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  "https://media.gettyimages.com/id/611734156/photo/faisal-mosque-at-sunset-islamabad.jpg?s=612x612&w=gi&k=20&c=z-y9fsuqLWXmgF8TA3OyxKK6h08XvvPHrPxLyjyzAKg=",
  "https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.jpg?s=612x612&w=0&k=20&c=bNqjdf8L-5igcRB89DdMgx0kNOmyeo1J_zzXmoxxl8w=",
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  "https://media.gettyimages.com/id/611734156/photo/faisal-mosque-at-sunset-islamabad.jpg?s=612x612&w=gi&k=20&c=z-y9fsuqLWXmgF8TA3OyxKK6h08XvvPHrPxLyjyzAKg=",
  // Add more image URLs as needed
];

const Portfolio = () => {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      <Grid item xs={12} textAlign="center">
        <Chip label="Portfolio" />
        <Typography variant="h3" fontWeight="bolder" my={1}>
          Works and projects
        </Typography>
      </Grid>

      {images.map((imageUrl, index) => (
        <Grid
          item
          m={4}
          xs={12}
          md={3}
          lg={3}
          key={index}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <img
            src={imageUrl}
            alt={`Image ${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Portfolio;
