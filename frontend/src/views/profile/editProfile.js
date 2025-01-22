import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile, selectUser } from "../../store/slices/userSlice";

const UpdateProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { userProfile, loading, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    resume: null,
  });

  useEffect(() => {
    if (userProfile) {
      setFormData({
        name: userProfile.name || "",
        email: userProfile.email || "",
        phone: userProfile.phone || "",
        address: userProfile.address || "",
        password: "",
        resume: null,
      });
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append("_id", user.user_id);
    updatedData.append("name", formData.name);
    updatedData.append("email", formData.email);
    updatedData.append("phone", formData.phone);
    updatedData.append("address", formData.address);
    if (formData.password) updatedData.append("password", formData.password);
    if (formData.resume) updatedData.append("resume", formData.resume);

    // Dispatch update profile action
    dispatch(updateUserProfile(updatedData));

    if (loading === false && error === null) {
      navigate("/profile");
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error updating profile: {error}</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined" onClick={() => window.history.back()}>
          Back
        </Button>
      </Box>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 800, margin: "0 auto" }}>
        <Typography variant="h4" gutterBottom>
          Update Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="New Password"
                variant="outlined"
                fullWidth
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
              {formData.resume && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected File: {formData.resume.name}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Box mt={4} textAlign="center">
            <Button variant="contained" color="primary" type="submit">
              Update Profile
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default UpdateProfilePage;
