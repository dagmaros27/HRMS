import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLeaveRequest } from "../../redux/slices/leaveRequestSlice";

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    reason: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addLeaveRequest(formData)).unwrap();
      alert("Leave request submitted successfully!");
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
