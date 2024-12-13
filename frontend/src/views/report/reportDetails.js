import React from "react";
import { Typography, Button, Box } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link, useParams } from "react-router-dom";

const ReportDetailsPage = () => {
  const { id } = useParams();

  const report = {
    id: id,
    timestamp: "2024-12-12 10:30:00",
    createdBy: "John Doe",
    content:
      "This is a detailed report about the system performance and logs for the specified period.",
  };
  return (
    <PageContainer
      title="Report Details"
      description={`Details for Report ID: ${id}`}
    >
      <DashboardCard
        title={`Report ID: ${report.id}`}
        action={
          <Link to={"/reports"}>
            {" "}
            <Button variant="outlined" color="primary">
              Back
            </Button>
          </Link>
        }
      >
        <Typography variant="body1" gutterBottom>
          <strong>Timestamp:</strong> {report.timestamp}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Created By:</strong> {report.createdBy}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Details:</strong> {report.content}
        </Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default ReportDetailsPage;
