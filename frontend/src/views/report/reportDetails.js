import React, { useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../../store/slices/reportSlice";
import Markdown from "react-markdown";
import FormatedDate from "../../components/shared/FormatedDate";
import axiosInstance from "../../axios";

const ReportDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { reports, status } = useSelector((state) => state.report);

  useEffect(() => {
    if (!reports.length) {
      dispatch(fetchReports());
    }
  }, [dispatch, reports.length]);

  const report = reports.find((report) => report._id.toString() === id);

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (!report) {
    return <Typography>Report not found.</Typography>;
  }

  const handleDownloadPdf = async () => {
    try {
      const response = await axiosInstance.get(
        `/report/download-pdf/${report._id}`
      );
      console.log(response);
    } catch (error) {
      console.error("Error downloading pdf:", error);
    }
  };

  return (
    <PageContainer
      title="Report Details"
      description={`Details for Report ID: ${id}`}
    >
      <DashboardCard
        title={`Report ID: ${report?._id}`}
        action={
          <Link to="/reports">
            <Button variant="outlined" color="primary">
              Back
            </Button>
          </Link>
        }
      >
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownloadPdf}
          >
            Download PDF
          </Button>
        </Box>
        <Typography variant="body1" gutterBottom>
          <strong>Timestamp:</strong> <FormatedDate date={report?.createdAt} />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Created By:</strong> {report?.createdBy?.name || "Admin"}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Details:</strong>
          <Markdown>{report?.content || "No content available"}</Markdown>
          {/* {report.content} */}
        </Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default ReportDetailsPage;
