import React from "react";
import {
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { IconEdit } from "@tabler/icons-react";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";

const LeaveRequestPage = () => {
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

  return (
    <PageContainer
      title="Leave Requests"
      description="this is Leave Requests page"
    >
      <DashboardCard title="Leave Requests">
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
              <TableRow key={request.id}>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.position}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell align="right">
                  <Link to={`/leave-requests/${request.id}`}>
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
      </DashboardCard>
    </PageContainer>
  );
};

export default LeaveRequestPage;
