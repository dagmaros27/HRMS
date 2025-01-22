import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLeaveRequests,
  selectLeaveRequests,
} from "../../store/slices/leaveRequestSlice"; // Adjust the path as needed
import {
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { IconEdit } from "@tabler/icons-react";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";
import FormatedDate from "../../components/shared/FormatedDate";

const LeaveRequestPage = () => {
  const dispatch = useDispatch();

  // Selectors for leave requests and loading status
  const leaveRequests = useSelector(selectLeaveRequests);
  const status = useSelector((state) => state.leaveRequest.status);

  console.log(leaveRequests);
  useEffect(() => {
    // Fetch leave requests on component mount
    dispatch(fetchLeaveRequests());
  }, [dispatch]);

  return (
    <PageContainer
      title="Leave Requests"
      description="This is the Leave Requests page"
    >
      <DashboardCard title="Leave Requests">
        {status === "loading" && (
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <CircularProgress />
          </div>
        )}
        {status === "failed" && (
          <Alert severity="error">Failed to load leave requests!</Alert>
        )}
        {status === "success" && leaveRequests.length === 0 && (
          <Alert severity="info">No leave requests found.</Alert>
        )}
        {status === "success" && leaveRequests.length > 0 && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request._id}>
                  <TableCell>{request.employee?.name}</TableCell>
                  <TableCell>{request.employee?.position}</TableCell>
                  <TableCell>{request.status}</TableCell>
                  <TableCell>
                    <FormatedDate date={request.startDate} /> -{" "}
                    <FormatedDate date={request.endDate} />
                  </TableCell>
                  <TableCell align="right">
                    <Link to={`/leave-requests/${request._id}`}>
                      <IconButton color="primary">
                        <IconEdit size="18" />
                        <Typography>View details</Typography>
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DashboardCard>
    </PageContainer>
  );
};

export default LeaveRequestPage;
