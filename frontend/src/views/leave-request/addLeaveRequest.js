import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLeaveRequest } from "../../store/slices/leaveRequestSlice";

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    reason: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date().setHours(0, 0, 0, 0); // Current date with time reset
    const startDate = new Date(formData.startDate).setHours(0, 0, 0, 0);
    const endDate = new Date(formData.endDate).setHours(0, 0, 0, 0);

    // Validation
    if (!formData.startDate || !formData.endDate) {
      alert("Please select both start and end dates.");
      return;
    }
    if (startDate < today) {
      alert("Start date must be in the future.");
      return;
    }
    if (endDate <= startDate) {
      alert("End date must be after the start date.");
      return;
    }

    try {
      await dispatch(addLeaveRequest(formData)).unwrap();
      alert("Leave request submitted successfully!");
      navigate("/leave-requests/history");

      setFormData({ startDate: "", endDate: "", reason: "" });
    } catch (error) {
      alert("Failed to submit leave request. Please try again.");
    }
  };

  return (
    <PageContainer title="Leave Request" description="Request leave from work">
      <DashboardCard
        title="Leave Request Form"
        action={
          <Link to="/leave-requests/history">
            <Button variant="outlined">Back</Button>
          </Link>
        }
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Start Date"
                name="startDate"
                InputLabelProps={{ shrink: true }}
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="End Date"
                name="endDate"
                InputLabelProps={{ shrink: true }}
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Reason for Leave"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center">
                <Button type="submit" variant="contained" color="primary">
                  Submit Leave Request
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </DashboardCard>
    </PageContainer>
  );
};

export default LeaveRequestForm;
