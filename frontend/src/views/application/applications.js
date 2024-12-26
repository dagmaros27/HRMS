import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApplications,
  selectApplications,
} from "../../store/slices/applicationSlice";
import { useParams } from "react-router-dom";

const ApplicantsPage = () => {
  const dispatch = useDispatch();
  const applications = useSelector(selectApplications);
  const status = useSelector((state) => state.application.status);
  const params = useParams();
  const { vacancyId } = params;

  useEffect(() => {
    dispatch(fetchApplications(vacancyId));
  }, [dispatch]);

  return (
    <PageContainer title="Applicants" description="View job applicants">
      <DashboardCard
        title="Job Applicants"
        action={
          <Link to={`/vacancy/`}>
            <Button variant="outlined">Back</Button>
          </Link>
        }
      >
        {status === "loading" ? (
          <Typography>Loading...</Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Applicant</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Date</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Status</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Actions</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application._id}>
                    <TableCell>{application.applicant}</TableCell>
                    <TableCell>{application.appliedDate}</TableCell>
                    <TableCell>{application.status}</TableCell>
                    <TableCell>
                      <Link
                        to={`/vacancy/${vacancyId}/applicants/${application._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="contained" color="primary">
                          View Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DashboardCard>
    </PageContainer>
  );
};

export default ApplicantsPage;
