import { Box, styled, Typography } from "@mui/material";
import React from "react";

const ServiceCard = ({ img, name, price, description }) => {
  const CardBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <CardBox>
      <ImgContainer>
        <img src={img} alt="servicePhoto" style={{ maxWidth: "100%" }} />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="h6" sx={{ fontWeight: "700" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          ${price}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </CardBox>
  );
};

export default ServiceCard;
