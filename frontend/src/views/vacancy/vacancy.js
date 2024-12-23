import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVacancies } from "../../store/slices/vacancySlice";
import { Grid, Button } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import VacancyCard from "./components/VacancyCard";
import { Link } from "react-router-dom";

const VacancyPage = () => {
  const dispatch = useDispatch();
  const { vacancies, status } = useSelector((state) => state.vacancy);

  useEffect(() => {
    dispatch(fetchVacancies());
  }, [dispatch]);

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
        {status === "loading" && <p>Loading vacancies...</p>}
        {status === "failed" && <p>Failed to load vacancies.</p>}
        <Grid container spacing={3}>
          {vacancies.map((vacancy) => (
            <Grid item xs={12} sm={6} md={4} key={vacancy._id}>
              <VacancyCard
                id={vacancy._id}
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
