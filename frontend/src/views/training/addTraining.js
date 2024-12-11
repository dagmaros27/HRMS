import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";

const AddTrainingPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    trainers: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, startDate, endDate } = formData;

    if (!title || !startDate || !endDate) {
      setError("Title, Start Date, and End Date are required.");
      return;
    }

    setError("");
    console.log("Training Submitted:", formData);

    // Reset the form (optional)
    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      trainers: "",
    });

    // Optionally, redirect or show a success message
  };

  return (
    <PageContainer
      title="Add Training"
      description="Add a new training session"
    >
      <DashboardCard
        title="Add Training"
        action={
          <Link to={"/training"}>
            <Button variant="outlined">Back</Button>
          </Link>
        }
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid container spacing={3} lg={8}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Date"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="End Date"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Trainers"
                name="trainers"
                value={formData.trainers}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography color="error">{error}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add Training
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default AddTrainingPage;
