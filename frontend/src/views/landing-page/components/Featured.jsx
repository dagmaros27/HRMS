// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * MUI Icons

// * Custom Styled Components
const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#17275F",
  height: "416px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3, 3, 0, 3),
    width: "90%",
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10, 0),
  margin: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));

export default function Featured() {
  return (
    <CustomBox>
      <CustomContainer>
        <Box sx={{ width: "60%" }}>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Why Galaxy Training School?
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            We are the best driving school in the galaxy. Our instructors are
            highly trained and experienced. We offer the best training at an
            affordable price.
            <br />
            <br />
            The automotive industry faces many challenges, from product safety
            and assurance to the transition from internal combustion engines
            (ICEs) to electric vehicles (EVs), and more. Our training courses
            enable you to understand and comply with the latest and most
            pertinent standards, including TISAX® (information security), ISO
            26262 (road vehicles functional safety) and ISO/IEC 21434 (road
            vehicles cybersecurity engineering).
            <br />
            <br />
            Contact us today to learn more about our training programs.
          </Typography>
          <Box>
            <Typography sx={{ color: "white" }}>
              {" "}
              Email: galaxyT@gmail.com
            </Typography>
            <Typography sx={{ color: "white" }}>
              {" "}
              Phone: 123-456-7890
            </Typography>
          </Box>
        </Box>
      </CustomContainer>
    </CustomBox>
  );
}
