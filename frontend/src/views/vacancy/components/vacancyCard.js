import { Card, Typography, Button, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import FormatedDate from "../../../components/shared/FormatedDate";

function ApplyButton(id) {
  return (
    <Link to={`/vacancy/apply/${id}`}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        fullWidth
        sx={{ mt: 2 }}
      >
        Apply Now
      </Button>
    </Link>
  );
}

function SeeApplicationsButton(id) {
  return (
    <Link to={`/vacancy/${id}/applicants/`}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        fullWidth
        sx={{ mt: 2 }}
      >
        See Applications
      </Button>
    </Link>
  );
}

const VacancyCard = ({
  id,
  title,
  datePosted,
  description,
  location,
  salary,
  userRole,
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
          <strong>Date Posted:</strong> <FormatedDate date={datePosted} />
        </Typography>
      </Box>
      {["APPLICANT", "EMPLOYEE"].includes(userRole) && ApplyButton(id)}
      {["HR_MANAGER", "ADMIN"].includes(userRole) && SeeApplicationsButton(id)}
    </Card>
  );
};

export default VacancyCard;
