import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { useSelector } from "react-redux";
import altImage from "../../assets/images/products/s5.jpg";

const NewsDescriptionPage = () => {
  const { id } = useParams(); // Get the news ID from the route parameters
  const { news, status } = useSelector((state) => state.news);

  const article = news.find((article) => article._id == id);

  if (status === "loading") {
    return (
      <Container>
        <Box textAlign="center" marginTop={5}>
          <CircularProgress />
          <Typography variant="body1" marginTop={2}>
            Loading news...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (status === "failed") {
    return (
      <Container>
        <Typography variant="h4" color="error" textAlign="center">
          Failed to load the news article. Please try again later.
        </Typography>
        <Box textAlign="center" marginTop={3}>
          <Link to="/news">
            <Button variant="contained">Back to News</Button>
          </Link>
        </Box>
      </Container>
    );
  }

  if (!article) {
    return (
      <Container>
        <Typography variant="h4" color="error" textAlign="center">
          News article not found!
        </Typography>
        <Box textAlign="center" marginTop={3}>
          <Link to="/news">
            <Button variant="contained">Back to News</Button>
          </Link>
        </Box>
      </Container>
    );
  }

  return (
    <PageContainer
      title="News Description"
      description="Read more about the news"
    >
      <DashboardCard
        title="News Details"
        action={
          <Link to={"/news"}>
            <Button variant="outlined">Back</Button>
          </Link>
        }
      >
        <img
          src={article.image || altImage}
          alt={article.title}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "16px",
            maxHeight: "400px",
            objectFit: "cover",
          }}
        />
        <Typography variant="h3" component="h1" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {article.description}
        </Typography>
        <Typography variant="body1" style={{ marginTop: "16px" }}>
          {article.content}
        </Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default NewsDescriptionPage;
