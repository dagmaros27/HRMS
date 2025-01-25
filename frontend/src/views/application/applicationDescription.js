import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Divider,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import {
  fetchApplicationById,
  selectSelectedApplication,
} from "../../store/slices/applicationSlice";
import FormatedDate from "../../components/shared/FormatedDate";

const ApplicantDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const application = useSelector(selectSelectedApplication);
  const applicant = application?.applicant;
  const status = useSelector((state) => state.application.status);

  useEffect(() => {
    dispatch(fetchApplicationById(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return (
      <PageContainer>
        <Typography align="center">Loading...</Typography>
      </PageContainer>
    );
  }

  if (!application) {
    return (
      <PageContainer>
        <Typography align="center">No application found.</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <DashboardCard
        title="Applicant Details"
        action={
          <Button variant="outlined" onClick={() => window.history.back()}>
            Back
          </Button>
        }
      >
        <Box mt={4}>
          {/* Application Details */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="body1">
              <strong>Application Status:</strong> {application.status}
            </Typography>
            <Typography variant="body1">
              <strong>Application Date:</strong>{" "}
              <FormatedDate date={application.createdAt} />
            </Typography>
          </Box>

          {/* Applicant Info Card */}
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Grid container spacing={3}>
              {/* Name */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Name:</Typography>
                <Typography variant="body1" color="text.secondary">
                  {applicant?.name}
                </Typography>
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Email:</Typography>
                <Typography variant="body1" color="text.secondary">
                  {applicant?.email}
                </Typography>
              </Grid>

              {/* Phone */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Phone:</Typography>
                <Typography variant="body1" color="text.secondary">
                  {applicant?.phone}
                </Typography>
              </Grid>

              {/* Resume */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Resume:</Typography>
                {applicant?.resume ? (
                  <a
                    href={`http://localhost:5000/api${applicant?.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" color="primary" size="small">
                      View Resume
                    </Button>
                  </a>
                ) : (
                  <Typography variant="body1" color="text.secondary">
                    No resume uploaded
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Cover Letter */}
            <Typography variant="h6" gutterBottom>
              Cover Letter:
            </Typography>
            <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
              {application.coverLetter}
            </Typography>
          </Paper>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default ApplicantDetailsPage;
