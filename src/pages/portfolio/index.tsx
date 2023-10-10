import React, { useState } from "react";
import { Button, Chip, Grid, Typography } from "@mui/material";
import { images } from "../../../utils/imagesUrl";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, 3);

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      <Grid item xs={12} textAlign="center">
        <Chip label="Portfolio" />
        <Typography variant="h3" fontWeight="bolder" mt={2}>
          Works and projects
        </Typography>
      </Grid>

      {visibleImages.map((imageUrl, index) => (
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

      {!showAll && (
        <Grid item xs={12} textAlign="end" mx={10}>
          <Button variant="text" onClick={handleSeeMoreClick}>
            See More
          </Button>
        </Grid>
      )}

      {showAll && (
        <>
          {images.slice(3).map((imageUrl, index) => (
            <Grid
              item
              m={4}
              xs={12}
              md={3}
              lg={3}
              key={index + 3} // Adding offset to the key for the new set of images
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
                alt={`Image ${index + 3}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
              />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export default Portfolio;
