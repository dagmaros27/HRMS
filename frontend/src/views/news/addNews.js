import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { display } from "@mui/system";
import { justifyContent } from "@mui/system/flexbox";
import { Link } from "react-router-dom";

const AddNewsPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    content: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, image, description, content } = formData;

    if (!title || !image || !description || !content) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("News Submitted:", formData);

    // Reset the form (optional)
    setFormData({
      title: "",
      image: "",
      description: "",
      content: "",
    });

    // Optionally, redirect or show a success message
  };

  return (
    <PageContainer title="Add News" description="Add a new news article">
      <DashboardCard
        title="Add News"
        action={
          <Link to={"/news"}>
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
                label="Image URL"
                name="image"
                value={formData.image}
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
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={4}
                required
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
                Add News
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default AddNewsPage;
