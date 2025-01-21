import React, { useState } from "react";
import {
  Typography,
  Select,
  MenuItem,
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

const mockData = [
  { id: 1, name: "John Doe", totalDays: 10, presentDays: 7, absentDays: 3 },
  { id: 2, name: "Jane Smith", totalDays: 10, presentDays: 9, absentDays: 1 },
  { id: 3, name: "Sam Wilson", totalDays: 10, presentDays: 5, absentDays: 5 },
];

const AttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState(
    mockData.map((employee) => ({
      ...employee,
      todaysAttendance: "Present", // Default today's attendance
    }))
  );

  const handleAttendanceChange = (id, value) => {
    setAttendanceData((prevData) =>
      prevData.map((employee) =>
        employee.id === id ? { ...employee, todaysAttendance: value } : employee
      )
    );
  };

  const handleTakeAttendance = () => {
    console.log("Attendance Submitted:", attendanceData);
    alert("Attendance has been submitted!");
  };

  return (
    <PageContainer
      title="Attendance Page"
      description="View employee stats and take attendance for today"
    >
      <DashboardCard title="Employee Attendance">
        <Box>
          <Typography variant="h6" gutterBottom>
            Employee Attendance Stats
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Total Days</TableCell>
                  <TableCell>Present Days</TableCell>
                  <TableCell>Absent Days</TableCell>
                  <TableCell>Today's Attendance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendanceData.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.totalDays}</TableCell>
                    <TableCell>{employee.presentDays}</TableCell>
                    <TableCell>{employee.absentDays}</TableCell>
                    <TableCell>
                      <Select
                        value={employee.todaysAttendance}
                        onChange={(e) =>
                          handleAttendanceChange(employee.id, e.target.value)
                        }
                      >
                        <MenuItem value="Present">Present</MenuItem>
                        <MenuItem value="Absent">Absent</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleTakeAttendance}
            >
              Take Attendance
            </Button>
          </Box>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default AttendancePage;
