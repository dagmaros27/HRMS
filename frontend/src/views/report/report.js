import React, { useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { generateReport, fetchReports } from "../../store/slices/reportSlice";
import FormatedDate from "../../components/shared/FormatedDate";

const ReportPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { reports, status } = useSelector((state) => state.report);

  useEffect(() => {
    dispatch(fetchReports());
    console.log(reports);
  }, [dispatch]);

  const handleGenerateReport = async () => {
    try {
      const result = await dispatch(generateReport()).unwrap();
      navigate(`/reports/${result._id}`);
    } catch (error) {
      console.error("Failed to generate report:", error);
    }
  };

  return (
    <PageContainer title="Report Page" description="This is the Report page">
      <DashboardCard
        title="Report List"
        action={
          <Button
            variant="contained"
            onClick={handleGenerateReport}
            disabled={status === "loading"}
          >
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
              <TableRow key={report?._id}>
                <TableCell>{report?._id}</TableCell>
                <TableCell>
                  <FormatedDate date={report?.createdAt} />
                </TableCell>
                <TableCell>
                  {report.createdBy === null
                    ? "Admin"
                    : report?.createdBy?.name}{" "}
                </TableCell>
                <TableCell>
                  <Link to={`/reports/${report?._id}`}>
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
