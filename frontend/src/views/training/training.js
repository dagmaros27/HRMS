import { Grid, Button } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";
import image from "../../assets/images/products/s5.jpg";

const TrainingPage = () => {
  const trainingSessions = [
    {
      id: 1,
      title: "Advanced React Workshop",
      description: "Enhance your React skills with advanced techniques.",
    },
    {
      id: 2,
      title: "AI and Machine Learning Bootcamp",
      description: "Dive deep into AI and machine learning concepts.",
    },
    {
      id: 3,
      title: "Full-Stack Development Course",
      description: "Become a proficient full-stack developer.",
    },
    {
      id: 4,
      title: "Cybersecurity Essentials",
      description: "Learn the fundamentals of cybersecurity.",
    },
  ];

  return (
    <PageContainer
      title="Training Page"
      description="Explore our training sessions"
    >
      <DashboardCard
        title="Upcoming Training"
        action={
          <Link to={"/training/add"}>
            <Button variant="contained">Add Training</Button>
          </Link>
        }
      >
        <Grid container spacing={3}>
          {trainingSessions.map((session) => (
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
                  src={image}
                  alt={session.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ margin: "0 0 8px" }}>{session.title}</h3>
                  <p style={{ margin: "0 0 16px", color: "#555" }}>
                    {session.description}
                  </p>
                  <Link to={`/training/${session.id}`}>
                    <Button variant="contained" size="small">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default TrainingPage;
