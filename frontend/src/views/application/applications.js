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
} from "../../redux/slices/applicationSlice";

const ApplicantsPage = () => {
  const dispatch = useDispatch();
  const applicants = useSelector(selectApplications);
  const status = useSelector((state) => state.application.status);

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  return (
    <PageContainer title="Applicants" description="View job applicants">
      <DashboardCard title="Job Applicants">
        {status === "loading" ? (
          <Typography>Loading...</Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Actions</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell>{applicant.name}</TableCell>
                    <TableCell>{applicant.email}</TableCell>
                    <TableCell>
                      <Link
                        to={`/vacancy/applicants/${applicant.id}`}
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
