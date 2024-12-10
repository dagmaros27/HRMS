import React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";

const LeaveRequestDescriptionPage = () => {
  // Mock data for the leave request
  const mockRequest = {
    name: "John Doe",
    position: "Software Developer",
    startDate: "2024-12-15",
    endDate: "2024-12-20",
    reason: "Family vacation",
  };

  const { name, position, startDate, endDate, reason } = mockRequest;

  return (
    <PageContainer
      title="Leave Request Details"
      description="Review the details of the leave request"
    >
      <DashboardCard
        title="Leave Request Details"
        action={
          <Link to="/leave-requests">
            <Button variant="outlined">Back</Button>
          </Link>
        }
      >
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Name:</Typography>
            <Typography>{name}</Typography>
          </Grid>

          {/* Position */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Position:</Typography>
            <Typography>{position}</Typography>
          </Grid>

          {/* Start Date */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Start Date:</Typography>
            <Typography>{startDate}</Typography>
          </Grid>

          {/* End Date */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">End Date:</Typography>
            <Typography>{endDate}</Typography>
          </Grid>

          {/* Reason */}
          <Grid item xs={12}>
            <Typography variant="h6">Reason:</Typography>
            <Typography>{reason}</Typography>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box mt={4}>
          <Button
            variant="contained"
            color="success"
            style={{ marginRight: "1rem" }}
          >
            Accept
          </Button>
          <Button variant="contained" color="error">
            Reject
          </Button>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default LeaveRequestDescriptionPage;
