import React from "react";
import {
  IconButton,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";

const MyTrainings = () => {
  const [trainings, setTrainings] = React.useState([
    {
      id: 1,
      name: "React Basics",
      trainer: "John Doe",
      date: "2023-10-01",
    },
    {
      id: 2,
      name: "Advanced CSS",
      trainer: "Jane Smith",
      date: "2023-10-15",
    },
  ]);

  const handleDelete = (id) => {
    setTrainings(trainings.filter((training) => training.id !== id));
  };

  return (
    <PageContainer title="My Trainings" description="This is My Trainings page">
      <DashboardCard
        title="My Trainings"
        action={
          <Link to="/add-training">
            <Button variant="contained" color="primary" sx={{ px: 3 }}>
              Add Training
            </Button>
          </Link>
        }
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Training Name</TableCell>
              <TableCell>Trainer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainings.map((training) => (
              <TableRow key={training.id}>
                <TableCell>{training.name}</TableCell>
                <TableCell>{training.trainer}</TableCell>
                <TableCell>{training.date}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(training.id)}
                  >
                    <IconTrash size="18" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DashboardCard>
    </PageContainer>
  );
};

export default MyTrainings;
