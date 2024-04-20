import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CarouselProps {
  images: string[]; // Array of image URLs
  title: string; // Title to display over the carousel
}

const Carousel: React.FC<CarouselProps> = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const fixedHeight = "90vh"; // Example of responsive fixed height using viewport height

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: fixedHeight, // Setting the responsive fixed height
        "& .MuiIconButton-root": {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          zIndex: 2,
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 1,
          zIndex: 1,
        }}
      >
        {title}
      </Typography>
      <IconButton onClick={goToPrev} sx={{ left: 16, zIndex: 2 }}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${activeIndex * 100}%)`,
          height: "100%",
        }}
      >
        {images.map((image, index) => (
          <Box
            component="img"
            src={image}
            key={index}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              flexShrink: 0,
            }}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <IconButton onClick={goToNext} sx={{ right: 16, zIndex: 2 }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
