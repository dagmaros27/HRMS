import React from "react";
import {
  IconButton,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
} from "@mui/material";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";

const LeaveRequestHistoryPage = () => {
  const [leaveRequests, setLeaveRequests] = React.useState([
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      status: "Pending",
      date: "2021-10-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Designer",
      status: "Approved",
      date: "2021-10-10",
    },
  ]);

  const handleViewDetails = (id) => {
    // Handle view details functionality
  };

  const handleDelete = (id) => {
    // Handle delete functionality
  };

  return (
    <PageContainer
      title="Leave Request History"
      description="this is Leave Requests history page"
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
              <TableRow key={request.id}>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.position}</TableCell>
                <TableCell>{request.date}</TableCell>
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
