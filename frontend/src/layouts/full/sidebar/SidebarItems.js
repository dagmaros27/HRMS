import React from "react";
import Menuitems from "./MenuItems";
import { useLocation } from "react-router";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import { selectUser } from "../../../store/slices/userSlice";
import { useSelector } from "react-redux";

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Menuitems.map((item) => {
          if (
            item.access &&
            (item.access.includes(user.user_role) ||
              item.access.includes("ANY"))
          ) {
            // {/********SubHeader**********/}
            if (item.subheader) {
              return <NavGroup item={item} key={item.subheader} />;

              // {/********If Sub Menu**********/}
              /* eslint no-else-return: "off" */
            } else {
              return (
                <NavItem item={item} key={item.id} pathDirect={pathDirect} />
              );
            }
          } else {
            return null;
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
