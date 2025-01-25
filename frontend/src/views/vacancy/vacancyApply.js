import { Box, Typography, TextField, Button, Card } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DashboardCard from "../../components/shared/DashboardCard";
import { useDispatch, useSelector } from "react-redux";
import {
  applyForVacancy,
  selectApplyStatus,
  clearApplyStatus,
} from "../../store/slices/vacancySlice";

const VacancyApplyPage = () => {
  const { id } = useParams();
  const [coverLetter, setCoverLetter] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Select the application status from Redux state
  const applicationStatus = useSelector(selectApplyStatus);

  const handleApplicationSubmit = () => {
    const applicationData = {
      jobVacancy: id,
      coverLetter: coverLetter,
    };

    dispatch(applyForVacancy(applicationData));
  };

  // React to the application status
  useEffect(() => {
    if (applicationStatus === "succeeded") {
      alert("Your application has been submitted!");
      dispatch(clearApplyStatus());
      navigate("/vacancy");
    } else if (applicationStatus === "failed") {
      alert("Failed to submit your application. Please try again.");
    }
  }, [applicationStatus, navigate, dispatch]);

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
              disabled={applicationStatus === "loading"} // Disable button while loading
            >
              {applicationStatus === "loading"
                ? "Submitting..."
                : "Submit Application"}
            </Button>
          </Box>
        </Card>
      </DashboardCard>
    </PageContainer>
  );
};

export default VacancyApplyPage;
