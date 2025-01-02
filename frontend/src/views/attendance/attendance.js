import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const AttendancePage = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [attendance, setAttendance] = useState([]);

  const handleAddAttendance = () => {
    if (employeeName.trim()) {
      setAttendance([
        ...attendance,
        {
          name: employeeName,
          date: new Date().toLocaleDateString(),
          status: "Present",
        },
      ]);
      setEmployeeName("");
    }
  };

  return (
    <PageContainer
      title="Attendance Page"
      description="Take attendance of employees and view records"
    >
      <DashboardCard title="Employee Attendance">
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            Mark Attendance
          </Typography>
          <TextField
            label="Employee Name"
            variant="outlined"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddAttendance}
            disabled={!employeeName.trim()}
          >
            Add Attendance
          </Button>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Attendance Records
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendance.length > 0 ? (
                  attendance.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.status}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                      No attendance records found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default AttendancePage;
