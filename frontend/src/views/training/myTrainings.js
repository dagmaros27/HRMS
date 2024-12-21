import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
  CircularProgress,
} from "@mui/material";
import { IconTrash } from "@tabler/icons-react";
import { myTrainings } from "../../store/slices/trainingSlice";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const MyTrainings = () => {
  const dispatch = useDispatch();
  const { trainings, status } = useSelector((state) => state.training);

  useEffect(() => {
    dispatch(myTrainings());
  }, [dispatch]);

  const handleDelete = (id) => {
    // Handle delete logic
    console.log(`Delete training with id: ${id}`);
  };

  return (
    <PageContainer
      title="My Trainings"
      description="Your registered training sessions"
    >
      <DashboardCard title="My Trainings">
        {status === "loading" ? (
          <CircularProgress />
        ) : (
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
                  <TableCell>{training.title}</TableCell>
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
        )}
      </DashboardCard>
    </PageContainer>
  );
};

export default MyTrainings;
