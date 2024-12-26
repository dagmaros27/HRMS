import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, CircularProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import {
  fetchTrainings,
  registerForTraining,
} from "../../store/slices/trainingSlice";
import { selectUser } from "../../store/slices/userSlice";

const TrainingPage = () => {
  const dispatch = useDispatch();
  const { trainings, status } = useSelector((state) => state.training);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchTrainings());
  }, [dispatch]);

  const handleRegister = (id) => {
    dispatch(registerForTraining(id));
  };

  return (
    <PageContainer
      title="Training Page"
      description="Explore our training sessions"
    >
      <DashboardCard
        title="Upcoming Training"
        action={
          ["ADMIN", "HR_MANAGER"].includes(user.user_role) && (
            <Link to="/training/add">
              <Button variant="contained" color="primary">
                Add Training
              </Button>
            </Link>
          )
        }
      >
        {status === "loading" ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {trainings.map((session) => (
              <Grid item xs={12} sm={6} md={4} key={session.id}>
                <div
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={session.image || "default-image-url.jpg"}
                    alt={session.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "16px" }}>
                    <Typography variant="h6">{session.title}</Typography>
                    <Typography variant="body2">
                      Date:
                      {session.startDate} - {session.endDate}
                    </Typography>
                    <Typography variant="body2">
                      {" "}
                      Trainer: <b> {session.trainer}</b>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {session.description}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      fullWidth
                      onClick={() => handleRegister(session._id)}
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </DashboardCard>
    </PageContainer>
  );
};

export default TrainingPage;
