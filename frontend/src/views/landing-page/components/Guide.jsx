import { IconCar, IconCarGarage, IconCarCrash } from "@tabler/icons-react";

import { IconArrowRight as ArrowRightAlt } from "@tabler/icons-react";
import { Box, Typography, styled } from "@mui/material";

const CustomBox = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

const GuidesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0",
    flexDirection: "column",
  },
}));

const GuideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

export default function Guide() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How can we help you?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Our guides will help you with all aspects of car training.
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <IconCar size={48} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Driving Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Learn to drive
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <IconCarGarage size={48} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Maintenance Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Car maintenance
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <IconCarCrash size={48} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Safety Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Car safety
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>
      </GuidesBox>
    </Box>
  );
}
