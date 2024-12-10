import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const ApplicantDetailsPage = () => {
  const { id } = useParams();

  const applicantData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    resume: "https://example.com/resume/johndoe.pdf",
    coverLetter:
      "I am excited to apply for the Software Developer position at your company. With a strong background in web development and a passion for problem-solving, I am confident in my ability to contribute to your team's success.",
  };

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
              <Typography variant="body1">{applicantData.name}</Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body1">{applicantData.email}</Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Phone:</Typography>
              <Typography variant="body1">{applicantData.phone}</Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Resume:</Typography>
              <a
                href={applicantData.resume}
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
                {applicantData.coverLetter}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default ApplicantDetailsPage;
