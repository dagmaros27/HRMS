import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic, e.g., API call
    console.log("Leave Request Submitted:", formData);
    alert("Leave request submitted successfully!");
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
            {/* Start Date Field */}
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

            {/* End Date Field */}
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

            {/* Reason Field */}
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

            {/* Submit Button */}
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
