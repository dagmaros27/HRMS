import { Card, Typography, Button, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const VacancyCard = ({
  id,
  title,
  datePosted,
  description,
  location,
  salary,
}) => {
  return (
    <Card sx={{ padding: 2, boxShadow: 3 }}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.primary">
          <strong>Location:</strong> {location}
        </Typography>
        <Typography variant="body2" color="text.primary">
          <strong>Salary:</strong> {salary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Date Posted:</strong> {datePosted}
        </Typography>

        <Link to={`/vacancy/apply/${id}`}>
          <Button variant="contained" color="primary" size="small" fullWidth>
            Apply Now
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default VacancyCard;
