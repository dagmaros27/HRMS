import { Grid, Button } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";
import image from "../../assets/images/products/s5.jpg";

const NewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Breaking News: Tech Innovation in 2024",
      description: "Discover the latest advancements in technology this year.",
    },
    {
      id: 2,
      title: "AI Revolution in the Workplace",
      description:
        "How AI is transforming industries and enhancing productivity.",
    },
    {
      id: 3,
      title: "Top 10 Programming Languages to Learn",
      description: "Stay ahead in your career with these must-know languages.",
    },
    {
      id: 4,
      title: "Sustainability in Tech",
      description: "Explore green initiatives in the tech industry.",
    },
  ];

  return (
    <PageContainer
      title="News Page"
      description="Stay updated with the latest news"
    >
      <DashboardCard
        title="Latest News"
        action={
          <Link to={"/news/post"}>
            <Button variant="contained">Post News</Button>
          </Link>
        }
      >
        <Grid container spacing={3}>
          {newsArticles.map((news) => (
            <Grid item xs={12} sm={6} md={4} key={news.id}>
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
                  alt={news.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ margin: "0 0 8px" }}>{news.title}</h3>
                  <p style={{ margin: "0 0 16px", color: "#555" }}>
                    {news.description}
                  </p>
                  <Link to={`/news/${news.id}`}>
                    <Button variant="contained" size="small">
                      See More
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

export default NewsPage;
