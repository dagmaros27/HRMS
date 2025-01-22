// * Images
import houseCardImg from "../media/illustration.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const CustomTextBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 5, 0, 5),
  flexDirection: "row",
  gap: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(3), // Adjusted gap for smaller screens
  },
}));

const Divider = styled("div")(({ theme }) => ({
  width: "13%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#000",
  fontWeight: "700",
  lineHeight: "1.2",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#7B8087",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

export default function MoreDetail() {
  return (
    <Container sx={{ marginTop: 6 }}>
      <CustomBox>
        <img
          src={houseCardImg}
          alt="House Card Images"
          style={{ maxWidth: "50%" }}
        />
        <Box>
          <Divider />
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: "700",
              my: 3,
              lineHeight: "45px",
            }}
          >
            You Deserve The Best
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            You need to get the best quality services. We provide a wide range
            of services for all types of vehicles. Our team of professional
            driving instructors are here to help you learn to drive with the
            best driving school in the galaxy!
          </Typography>
        </Box>
      </CustomBox>

      <CustomTextBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1, // Ensures space is evenly distributed
          }}
        >
          <LargeText>25+</LargeText>
          <SmallText>Certified Trainers</SmallText>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1, // Ensures space is evenly distributed
          }}
        >
          <LargeText>3000+</LargeText>
          <SmallText> Statisfied Customers </SmallText>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1, // Ensures space is evenly distributed
          }}
        >
          <LargeText>15+</LargeText>
          <SmallText>Partner companies</SmallText>
        </Box>
      </CustomTextBox>
    </Container>
  );
}
