import React, { useEffect } from "react";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLeaveRequests,
  selectLeaveRequests,
} from "../../store/slices/leaveRequestSlice";
import { selectUser } from "../../store/slices/userSlice";

const LeaveRequestHistoryPage = () => {
  const dispatch = useDispatch();
  const leaveRequests = useSelector(selectLeaveRequests);
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchLeaveRequests());
  }, [dispatch]);

  return (
    <PageContainer
      title="Leave Request History"
      description="View past leave requests"
    >
      <DashboardCard
        title="Leave Requests"
        action={
          <Link to="/leave-requests/add">
            <Button variant="contained" color="primary" sx={{ px: 3 }}>
              Add Leave Request
            </Button>
          </Link>
        }
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((request) => (
              <TableRow key={request._id}>
                <TableCell>{request.username}</TableCell>
                <TableCell>{request.position}</TableCell>
                <TableCell>
                  {request.startDate} - {request.endDate}
                </TableCell>
                <TableCell>
                  <Button
                    disableRipple
                    disableElevation
                    color={
                      request.status === "Approved"
                        ? "success"
                        : request.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {request.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DashboardCard>
    </PageContainer>
  );
};

export default LeaveRequestHistoryPage;
