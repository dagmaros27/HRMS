import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import CustomTextField from "../../../components/forms/theme-elements/CustomTextField";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectIsLoggedIn } from "../../../store/slices/userSlice";

const AuthLogin = ({ title, subtitle, subtext }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { loading, error } = useSelector((state) => state.user);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    // Navigate to the dashboard if already logged in
    if (isLoggedIn) {
      navigate("/employees");
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLogin = () => {
    if (!credentials.email || !credentials.password) {
      alert("Please fill in both email and password.");
      return;
    }
    dispatch(loginUser(credentials));
  };

  return (
    <>
      {title && (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      )}

      {subtext}

      <Stack>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="email"
            mb="5px"
          >
            Email
          </Typography>
          <CustomTextField
            id="email"
            value={credentials.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            type="email"
          />
        </Box>
        <Box mt="25px">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            Password
          </Typography>
          <CustomTextField
            id="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          <Typography
            component={Link}
            to="/"
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Forgot Password?
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="button"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </Box>
      {error && (
        <Typography color="error" mt={2}>
          {error}
        </Typography>
      )}
      {subtitle}
    </>
  );
};

export default AuthLogin;
