import { useState } from "react";

// * Components
import CustomButton from "./CustomButton";

// * MUI Components
import {
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";

import {
  IconPhone,
  IconPlaylist,
  IconHome,
  IconList,
  IconServicemark,
  IconMenu as MenuIcon,
} from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 25,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLink = styled(Typography)(({ theme }) => ({
  color: "#4F5361",
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    color: "#fff",
  },
}));

const MenuBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

// * Functions
// const ListComponent = () => (
//   <List
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "space-between",
//       justifyContent: "center",
//       width: 200,
//     }}
//   >
//     {["Home", "Features", "Services", "Products", "About"].map(
//       (text, index) => (
//         <ListItem key={text} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               {index === 0 && <IconHome />}
//               {index === 1 && <IconPlaylist />}
//               {index === 2 && <IconServicemark />}
//               {index === 3 && <IconList />}
//               {index === 4 && <IconPhone />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItemButton>
//         </ListItem>
//       )
//     )}
//   </List>
// );

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "#E6F0FF",
      }}
    >
      <Box>
        {/* <MenuBox onClick={(e) => setShowMenu(true)}>
          <MenuIcon />
        </MenuBox>
        <Drawer
          anchor="left"
          open={showMenu}
          onClose={(e) => setShowMenu(false)}
        >
          <ListComponent />
        </Drawer> */}
        <Typography variant="h3"> Galaxy </Typography>
      </Box>

      {/* <NavbarLinkBox>
        <NavbarLink>Home</NavbarLink>
        <NavbarLink>Features</NavbarLink>
        <NavbarLink>Services</NavbarLink>
        <NavbarLink>Products</NavbarLink>
        <NavbarLink>About</NavbarLink>
      </NavbarLinkBox> */}

      <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
        <Button
          sx={{}}
          onClick={() => {
            navigate("/auth/register");
          }}
        >
          Here to apply for job?
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          Sign In to HRMS
        </Button>
      </Box>
    </Box>
  );
}
