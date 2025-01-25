import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, selectUser } from "../../store/slices/userSlice"; // Import your thunk action

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const { userProfile, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch user profile on component mount
    dispatch(
      fetchUserProfile({ userId: user.user_id, userRole: user.user_role })
    );
  }, [dispatch]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error fetching profile: {error}</Typography>;
  if (!userProfile) return <Typography>No user profile available</Typography>;

  // Render user-specific data
  const renderSpecificDetails = () => {
    switch (user.user_role) {
      case "EMPLOYEE":
      case "HR_MANAGER":
      case "TRAINER":
        return (
          <>
            {userProfile.employmentHistory.length > 0 && (
              <>
                <Typography variant="h6">Employment History:</Typography>
                <List>
                  {userProfile.employmentHistory.map((history, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={`${history.company} - ${history.role}`}
                        secondary={`From: ${new Date(
                          history.startDate
                        ).toLocaleDateString()} To: ${
                          history.endDate
                            ? new Date(history.endDate).toLocaleDateString()
                            : "Present"
                        }`}
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
            {userProfile.qualifications.length > 0 && (
              <>
                <Typography variant="h6">Qualifications:</Typography>
                <List>
                  {userProfile.qualifications.map((qualification, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={qualification} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
            {userProfile.certifications.length > 0 && (
              <>
                <Typography variant="h6">Certifications:</Typography>
                <List>
                  {userProfile.certifications.map((certification, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={certification} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </>
        );
      case "APPLICANT":
        return (
          <>
            {userProfile.resume ? (
              <>
                <Typography variant="h6">Resume:</Typography>
                <a
                  href={`http://localhost:5000/api${userProfile?.resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </>
            ) : (
              <Typography variant="h6">No resume uploaded</Typography>
            )}
            {/* <Typography variant="h6">Applied Jobs:</Typography>
            <List>
              {userProfile.appliedJobs.map((job, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`Job ID: ${job}`} />
                </ListItem>
              ))}
            </List> */}
          </>
        );
      case "ADMIN":
        return <></>;
      default:
        return <Typography>No specific details available.</Typography>;
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 800, margin: "0 auto" }}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Name:</Typography>
            <Typography>
              {userProfile.name ? userProfile.name : userProfile.username}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Email:</Typography>
            <Typography>{userProfile.email}</Typography>
          </Grid>
          {userProfile.phone && (
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Phone:</Typography>
              <Typography>{userProfile.phone}</Typography>
            </Grid>
          )}
          {userProfile.address && (
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Address:</Typography>
              <Typography>{userProfile.address}</Typography>
            </Grid>
          )}
        </Grid>

        <Box mt={4}>{renderSpecificDetails()}</Box>
        {user.user_role === "APPLICANT" && (
          <>
            <Alert severity="info">
              If you are an applicant, you can update your profile and add your
              resume by clicking the button below.
            </Alert>
            <Box mt={4} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/profile/edit")}
              >
                Update Profile
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default ProfilePage;
