import { useParams } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../../assets/images/products/s5.jpg";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const newsArticles = [
  {
    id: 1,
    title: "Breaking News: Tech Innovation in 2024",
    description: "Discover the latest advancements in technology this year.",
    content: `The year 2024 is shaping up to be a milestone in tech innovation. 
      From advancements in artificial intelligence to groundbreaking 
      developments in renewable energy, the possibilities are endless. 
      Stay tuned for more updates.`,
  },
  {
    id: 2,
    title: "AI Revolution in the Workplace",
    description:
      "How AI is transforming industries and enhancing productivity.",
    content: `Artificial Intelligence is making waves across various industries, 
      improving efficiency and transforming the workplace. From healthcare 
      to logistics, learn how AI is changing the way we work.`,
  },
  {
    id: 3,
    title: "Top 10 Programming Languages to Learn",
    description: "Stay ahead in your career with these must-know languages.",
    content: `The tech industry demands skilled developers. This list highlights 
      the top programming languages you should learn in 2024 to advance 
      your career and stay ahead of the curve.`,
  },
  {
    id: 4,
    title: "Sustainability in Tech",
    description: "Explore green initiatives in the tech industry.",
    content: `The tech world is moving towards sustainability. Learn how companies 
      are adopting eco-friendly practices and implementing green technologies.`,
  },
];

const NewsDescriptionPage = () => {
  const { id } = useParams(); // Get the news ID from the route parameters
  const news = newsArticles.find((article) => article.id === parseInt(id));

  if (!news) {
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
        title="Latest News"
        action={
          <Link to={"/news"}>
            <Button variant="outlined">Back</Button>
          </Link>
        }
      >
        <img
          src={image}
          alt={news.title}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "16px",
            maxHeight: "400px",
            objectFit: "cover",
          }}
        />
        <Typography variant="h3" component="h1" gutterBottom>
          {news.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {news.description}
        </Typography>
        <Typography variant="body1" style={{ marginTop: "16px" }}>
          {news.content}
        </Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default NewsDescriptionPage;
