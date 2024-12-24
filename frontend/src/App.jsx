// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";
import { useSelector } from "react-redux";

import { baselightTheme } from "./theme/DefaultColors";
import { selectUser } from "./store/slices/userSlice";

function App() {
  const user = useSelector(selectUser);
  const userRole = user.user_role;

  const routing = useRoutes(Router(userRole));
  const theme = baselightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
