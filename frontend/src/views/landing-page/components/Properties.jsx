// * Components
import services from "../data/properties";
import House from "./House";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const PropertiesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const PropertiesTextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export default function Properties() {
  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Our Services
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", my: 3 }}>
            We provide a wide range of services for all types of vehicles
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {services.map((service) => (
            <House
              key={service.id}
              img={service.image}
              name={service.name}
              price={service.price}
              description={service.description}
            />
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
}
