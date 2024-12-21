import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApplicationByVacancy,
  selectVacancyApplications,
} from "../../store/slices/applicationSlice";

const ApplicantDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const applicant = useSelector(selectVacancyApplications)[0]; // Assuming one result
  const status = useSelector((state) => state.application.status);

  useEffect(() => {
    dispatch(fetchApplicationByVacancy(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (!applicant) {
    return <Typography>No applicant found.</Typography>;
  }

  return (
    <PageContainer>
      <DashboardCard
        title="Applicant Details"
        action={
          <Link to="/vacancy/applicants" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Back</Button>
          </Link>
        }
      >
        <Box mt={4}>
          <Paper elevation={3} style={{ padding: "24px" }}>
            <Box mt={3}>
              <Typography variant="h6">Name:</Typography>
              <Typography variant="body1">{applicant.name}</Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body1">{applicant.email}</Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Phone:</Typography>
              <Typography variant="body1">{applicant.phone}</Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Resume:</Typography>
              <a
                href={applicant.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" color="primary">
                  View Resume
                </Button>
              </a>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Cover Letter:</Typography>
              <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
                {applicant.coverLetter}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default ApplicantDetailsPage;
