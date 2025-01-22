import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";

// * MUI Components
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

// * Styled Components

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#E6F0FF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          padding: "2rem",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography variant="h4"> Galaxy PLC &copy; 2025</Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: "500",
              mt: 2,
            }}
          >
            Learn how to drive with us.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
              }}
            >
              Get in touch
            </Typography>

            <IconBox>
              <IconButton sx={{ cursor: "pointer" }}>
                <IconBrandFacebook />
              </IconButton>
              <IconButton sx={{ cursor: "pointer" }}>
                <IconBrandX />
              </IconButton>
              <IconButton sx={{ cursor: "pointer" }}>
                <IconBrandLinkedin />
              </IconButton>
            </IconBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
