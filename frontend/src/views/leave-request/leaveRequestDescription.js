import React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  approveLeaveRequest,
  rejectLeaveRequest,
  selectLeaveRequests,
} from "../../store/slices/leaveRequestSlice";

const LeaveRequestDescriptionPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const leaveRequests = useSelector(selectLeaveRequests);
  const request = leaveRequests.find((request) => request._id === id);

  const handleApprove = async () => {
    try {
      await dispatch(approveLeaveRequest(request._id)).unwrap();
      alert("Leave request approved.");
    } catch (error) {
      alert("Failed to approve leave request.");
    }
  };

  const handleReject = async () => {
    try {
      await dispatch(rejectLeaveRequest(request._id)).unwrap();
      alert("Leave request rejected.");
    } catch (error) {
      alert("Failed to reject leave request.");
    }
  };

  if (!request) return <Typography>No request found.</Typography>;

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
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Name:</Typography>
            <Typography>{request.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Position:</Typography>
            <Typography>{request.position}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Start Date:</Typography>
            <Typography>{request.startDate}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">End Date:</Typography>
            <Typography>{request.endDate}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Reason:</Typography>
            <Typography>{request.reason}</Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Button
            variant="contained"
            color="success"
            style={{ marginRight: "1rem" }}
            onClick={handleApprove}
          >
            Accept
          </Button>
          <Button variant="contained" color="error" onClick={handleReject}>
            Reject
          </Button>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default LeaveRequestDescriptionPage;
