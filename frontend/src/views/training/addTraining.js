import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTraining } from "../../store/slices/trainingSlice";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import axios from "../../axios";

const AddTrainingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.training);

  const [trainers, setTrainers] = useState([]);
  const [formData, setFormData] = useState({
    trainee: "",
    description: "",
    startDate: "",
    endDate: "",
    trainer: "",
  });
  const [error, setError] = useState("");

  // Fetch trainers on component mount
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("/trainer");
        setTrainers(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { trainee, startDate, endDate, trainer } = formData;

    if (!trainee || !startDate || !endDate || !trainer) {
      setError("Trainee, Start Date, and End Date are required.");
      return;
    }

    setError("");
    dispatch(addTraining(formData)).then(() => {
      navigate("/training");
    });
  };

  return (
    <PageContainer
      title="Add Training"
      description="Add a new training session"
    >
      <DashboardCard
        title="Add Training"
        action={
          <Link to="/training">
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
                label="Trainee Name"
                name="trainee"
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
            <Grid item xs={6}>
              <TextField
                label="Start Date"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="End Date"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Trainer"
                name="trainer"
                value={formData.trainer}
                onChange={handleInputChange}
                select
                fullWidth
                required
                SelectProps={{
                  native: true,
                }}
              >
                <option value="" disabled>
                  Select a trainer
                </option>
                {trainers.map((trainer) => (
                  <option key={trainer._id} value={trainer._id}>
                    {trainer?.employee?.name}
                  </option>
                ))}
              </TextField>
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
                {status === "loading" ? (
                  <CircularProgress size={24} />
                ) : (
                  "Add Training"
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default AddTrainingPage;
