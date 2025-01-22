// * Components
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";

import HeroImg from "../media/training.jpg";

import { Box, Container, Typography, styled } from "@mui/material";

// Styled Hero Container with background image
const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${HeroImg})`, // Add the background image
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "80vh",
  paddingBottom: theme.spacing(2),
  marginBottom: theme.spacing(6),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Add dark overlay
    backdropFilter: "blur(4px)", // Blur effect
    zIndex: 1,
  },
}));

const CustomHeroBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  position: "relative", // Ensure content is above the background
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: theme.spacing(3),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#fff", // White text
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 4, 0),
  lineHeight: 1.2, // Adjust line height for better spacing
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)", // Add text shadow
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
}));

export default function Hero() {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <Container>
          <CustomHeroBox>
            <Box sx={{ flex: 1.25 }}>
              {/* Text Content */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#fff",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)", // Add subtle shadow
                }}
              >
                Welcome to Galaxy Car Training School
              </Typography>
              <Title>
                Learn to drive with the best driving school in the galaxy!
              </Title>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#fff",
                  my: 4,
                  lineHeight: 1.5,
                  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)", // Add subtle shadow
                }}
              >
                We are a team of professional driving instructors who are
                passionate about road safety and teaching you the skills you
                need to become a confident and safe driver. Our driving school
                is committed to providing you with the highest quality driving
                lessons at affordable prices.
              </Typography>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Box>
          </CustomHeroBox>
        </Container>
      </HeroContainer>
    </>
  );
}
