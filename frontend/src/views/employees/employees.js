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

const Employees = () => {
  const [employees, setEmployees] = React.useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      position: "Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      position: "Designer",
    },
  ]);

  const handleEdit = (id) => {
    // Handle edit functionality
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <PageContainer title="Employees" description="this is Employees page">
      <DashboardCard
        title="Employees"
        action={
          <Link to="/add-employee">
            <Button variant="contained" color="primary" sx={{ px: 3 }}>
              Add Employee
            </Button>
          </Link>
        }
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Position</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell align="right">
                  <Link to={`/edit-employee/${employee.id}`}>
                    <IconButton color="primary">
                      <IconEdit size="18" />
                    </IconButton>
                  </Link>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(employee.id)}
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

export default Employees;
