import { Box, Typography, TextField, Button, Card } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import DashboardCard from "../../components/shared/DashboardCard";
import { useDispatch } from "react-redux";
import {applyFor}

const VacancyApplyPage = () => {
  const { id } = useParams();
  const [coverLetter, setCoverLetter] = useState("");

  const handleApplicationSubmit = () => {
    const applicationData = {
      jobId: id,
      coverLetter: coverLetter,
    };
    console.log("Submitting application:", applicationData);

    alert("Your application has been submitted!");
  };

  return (
    <PageContainer title="Apply for Vacancy">
      <DashboardCard
        title="Apply for Vacancy"
        description="Application Page"
        action={
          <Link to={"/vacancy"}>
            <Button variant="outlined"> Back</Button>
          </Link>
        }
      >
        <Card
          sx={{ padding: 3, maxWidth: "600px", margin: "auto", boxShadow: 3 }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Apply for: Vacancy #{id}
          </Typography>
          <Typography variant="body2" color="text.primary" mb={2}>
            All your profile information will be included in this application.
          </Typography>

          <TextField
            label="Cover Letter"
            placeholder="Write your cover letter here..."
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            sx={{ marginBottom: 3 }}
          />

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleApplicationSubmit}
            >
              Submit Application
            </Button>
          </Box>
        </Card>
      </DashboardCard>
    </PageContainer>
  );
};

export default VacancyApplyPage;
