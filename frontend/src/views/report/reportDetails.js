import React, { useEffect } from "react";
import { Typography, Button } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../../store/slices/reportSlice";

const ReportDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { reports, status } = useSelector((state) => state.report);

  useEffect(() => {
    if (!reports.length) {
      dispatch(fetchReports());
    }
  }, [dispatch, reports.length]);

  const report = reports.find((report) => report._id === id);

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (!report) {
    return <Typography>Report not found.</Typography>;
  }

  return (
    <PageContainer
      title="Report Details"
      description={`Details for Report ID: ${id}`}
    >
      <DashboardCard
        title={`Report ID: ${report.id}`}
        action={
          <Link to="/reports">
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
          <strong>Details:</strong>{" "}
          {report.content || "No additional details available."}
        </Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default ReportDetailsPage;
