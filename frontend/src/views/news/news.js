import { Grid, Button, CircularProgress, Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../../store/slices/newsSlice";
import altImage from "../../assets/images/products/s5.jpg";
import { selectUser } from "../../store/slices/userSlice";

const NewsPage = () => {
  const dispatch = useDispatch();
  const { news, fetchStatus } = useSelector((state) => state.news);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <PageContainer
      title="News Page"
      description="Stay updated with the latest news"
    >
      <DashboardCard
        title="Latest News"
        action={
          ["ADMIN", "HR_MANAGER"].includes(user.user_role) && (
            <Link to={"/news/post"}>
              <Button variant="contained">Post News</Button>
            </Link>
          )
        }
      >
        {fetchStatus === "loading" && (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <CircularProgress />
            <Typography variant="body1">Loading news...</Typography>
          </div>
        )}

        {fetchStatus === "failed" && (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <Typography variant="body1" color="error">
              Failed to load news. Please try again later.
            </Typography>
          </div>
        )}

        {fetchStatus === "success" && news.length === 0 && (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <Typography variant="body1">
              No news available at the moment.
            </Typography>
          </div>
        )}

        {fetchStatus === "success" && news.length > 0 && (
          <Grid container spacing={3}>
            {news.map((article) => (
              <Grid item xs={12} sm={6} md={4} key={article._id}>
                <div
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={article.image || altImage}
                    alt={article.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "16px" }}>
                    <h3 style={{ margin: "0 0 8px" }}>{article.title}</h3>
                    <p style={{ margin: "0 0 16px", color: "#555" }}>
                      {article.description}
                    </p>
                    <Link to={`/news/${article._id}`}>
                      <Button variant="contained" size="small">
                        See More
                      </Button>
                    </Link>
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

export default NewsPage;
