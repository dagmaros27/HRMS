import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVacancy } from "../../store/slices/vacancySlice";

const AddVacancyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    salary: "",
    location: "",
    deadline: "",
    status: "open", // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date().setHours(0, 0, 0, 0);
    const vacancyDate = new Date(formValues.deadline).setHours(0, 0, 0, 0);

    if (vacancyDate < today) {
      alert("The date must be in the future.");
      return;
    }

    try {
      dispatch(addVacancy({ ...formValues }));
      alert("Vacancy added successfully!");
      navigate("/vacancy");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the vacancy.");
    }
  };

  return (
    <PageContainer title="Add Vacancy">
      <DashboardCard
        title={"Add Vacancy"}
        action={
          <Link to={"/vacancy"}>
            <Button variant="outlined">Back</Button>
          </Link>
        }
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 600,
            mx: "auto",
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <TextField
            label="Job Title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            label="Salary"
            name="salary"
            type="number"
            value={formValues.salary}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            name="location"
            value={formValues.location}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Deadline"
            name="deadline"
            type="date"
            value={formValues.deadline}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            label="Status"
            name="status"
            select
            value={formValues.status}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="open">Open</MenuItem>
            <MenuItem value="closed">Closed</MenuItem>
          </TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Vacancy
          </Button>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default AddVacancyPage;
