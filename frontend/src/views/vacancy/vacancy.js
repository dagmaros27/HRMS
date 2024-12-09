import { Grid, Button } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import VacancyCard from "./components/VacancyCard";
import { Link } from "react-router-dom";

const VacancyPage = () => {
  const vacancies = [
    {
      id: 1,
      title: "Software Developer",
      description: "Join our team to build cutting-edge software solutions.",
      location: "Lagos, Nigeria",
      datePosted: "2021-09-01",
      salary: "$70,000 - $90,000",
    },
    {
      id: 2,
      title: "Product Manager",
      description: "Drive the vision and execution of our product lifecycle.",
      location: "Lagos, Nigeria",
      datePosted: "2021-09-01",
      salary: "$100,000 - $120,000",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      description:
        "Create engaging designs and user experiences for our platform.",
      location: "Lagos, Nigeria",
      datePosted: "2021-09-01",
      salary: "$60,000 - $80,000",
    },
    {
      id: 4,
      title: "Data Scientist",
      description: "Analyze data to drive decision-making and insights.",
      location: "Lagos, Nigeria",
      datePosted: "2021-09-01",
      salary: "$90,000 - $110,000",
    },
  ];

  return (
    <PageContainer
      title="Vacancy Page"
      description="Explore available job opportunities"
    >
      <DashboardCard
        title="Current Vacancies"
        action={
          <Link to={"/vacancy/add"}>
            <Button variant="contained">Add Vacancy</Button>
          </Link>
        }
      >
        <Grid container spacing={3}>
          {vacancies.map((vacancy) => (
            <Grid item xs={12} sm={6} md={4} key={vacancy.id}>
              <VacancyCard
                id={vacancy.id}
                title={vacancy.title}
                datePosted={vacancy.datePosted}
                description={vacancy.description}
                location={vacancy.location}
                salary={vacancy.salary}
              />
            </Grid>
          ))}
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default VacancyPage;
