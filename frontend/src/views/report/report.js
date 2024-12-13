import React from "react";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";

const ReportPage = () => {
  // Sample data for reports
  const reports = [
    { id: 1, timestamp: "2024-12-12 10:30:00", createdBy: "John Doe" },
    { id: 2, timestamp: "2024-12-11 14:15:00", createdBy: "Jane Smith" },
    { id: 3, timestamp: "2024-12-10 09:45:00", createdBy: "Alice Johnson" },
  ];

  const handleGenerateReport = () => {
    console.log("Generate Report button clicked");
    // Logic to generate a new report
  };

  return (
    <PageContainer title="Report Page" description="This is the Report page">
      <DashboardCard
        title="Report List"
        action={
          <Button variant="contained" onClick={handleGenerateReport}>
            {" "}
            Generate Report
          </Button>
        }
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Report ID</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.id}</TableCell>
                <TableCell>{report.timestamp}</TableCell>
                <TableCell>{report.createdBy}</TableCell>
                <TableCell>
                  <Link to={`/reports/${report.id}`}>
                    <Button variant="outlined">View Details</Button>
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

export default ReportPage;
