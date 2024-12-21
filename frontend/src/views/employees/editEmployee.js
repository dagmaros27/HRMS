import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  FormControl,
  Typography,
  IconButton,
  CircularProgress,
  Alert,
} from "@mui/material";
import { IconPlus, IconRowRemove } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployeeById,
  updateEmployee,
  selectEmployeeStatus,
} from "../../store/slices/employeeSlice";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee.selectedEmployee);
  const updateStatus = useSelector(selectEmployeeStatus);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    position: "",
    employmentHistory: [],
    qualifications: [],
    certifications: [],
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchEmployeeById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (employee && Object.keys(employee).length) {
      setFormData({
        name: employee.name || "",
        email: employee.email || "",
        password: employee.password || "",
        phone: employee.phone || "",
        address: employee.address || "",
        position: employee.position || "",
        employmentHistory: employee.employmentHistory || [],
        qualifications: employee.qualifications || [],
        certifications: employee.certifications || [],
      });
    }
  }, [employee]);

  useEffect(() => {
    if (updateStatus === "fulfilled") {
      navigate("/employees");
    }
  }, [updateStatus, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedChange = (index, field, value, key) => {
    setFormData((prev) => {
      const updated = [...prev[key]];
      updated[index][field] = value;
      return { ...prev, [key]: updated };
    });
  };

  const addNestedField = (key, defaultEntry) => {
    setFormData((prev) => ({
      ...prev,
      [key]: [...prev[key], defaultEntry],
    }));
  };

  const removeNestedField = (key, index) => {
    setFormData((prev) => {
      const updated = [...prev[key]];
      updated.splice(index, 1);
      return { ...prev, [key]: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee({ _id: id, ...formData }));
  };

  return (
    <PageContainer
      title="Edit Employee"
      description="this is Edit Employee page"
    >
      <DashboardCard
        title="Edit Employee"
        action={
          <Link to="/employees">
            <Button variant="outlined" color="primary">
              Back
            </Button>
          </Link>
        }
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FormControl sx={{ width: "60%" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, p: 4 }}
            >
              {updateStatus === "failed" && (
                <Alert severity="error">
                  Failed to update employee. Please try again.
                </Alert>
              )}

              <TextField
                required
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                multiline
                rows={3}
                value={formData.address}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />

              <Typography variant="h6">Employment History</Typography>
              {formData.employmentHistory.map((entry, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <TextField
                    fullWidth
                    label="Company"
                    value={entry.company}
                    onChange={(e) =>
                      handleNestedChange(
                        index,
                        "company",
                        e.target.value,
                        "employmentHistory"
                      )
                    }
                  />
                  <TextField
                    fullWidth
                    label="Role"
                    value={entry.role}
                    onChange={(e) =>
                      handleNestedChange(
                        index,
                        "role",
                        e.target.value,
                        "employmentHistory"
                      )
                    }
                  />
                  <TextField
                    fullWidth
                    label="Start Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={entry.startDate}
                    onChange={(e) =>
                      handleNestedChange(
                        index,
                        "startDate",
                        e.target.value,
                        "employmentHistory"
                      )
                    }
                  />
                  <TextField
                    fullWidth
                    label="End Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={entry.endDate}
                    onChange={(e) =>
                      handleNestedChange(
                        index,
                        "endDate",
                        e.target.value,
                        "employmentHistory"
                      )
                    }
                  />
                  <IconButton
                    color="error"
                    onClick={() =>
                      removeNestedField("employmentHistory", index)
                    }
                  >
                    <IconRowRemove />
                  </IconButton>
                </Box>
              ))}
              <Button
                startIcon={<IconPlus />}
                variant="outlined"
                onClick={() =>
                  addNestedField("employmentHistory", {
                    company: "",
                    role: "",
                    startDate: "",
                    endDate: "",
                  })
                }
              >
                Add Employment History
              </Button>

              <Typography variant="h6">Qualifications</Typography>
              {formData.qualifications.map((qualification, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", gap: 2, alignItems: "center" }}
                >
                  <TextField
                    fullWidth
                    label={`Qualification ${index + 1}`}
                    value={qualification}
                    onChange={(e) =>
                      handleNestedChange(
                        index,
                        null,
                        e.target.value,
                        "qualifications"
                      )
                    }
                  />
                  <IconButton
                    color="error"
                    onClick={() => removeNestedField("qualifications", index)}
                  >
                    <IconRowRemove />
                  </IconButton>
                </Box>
              ))}
              <Button
                startIcon={<IconPlus />}
                variant="outlined"
                onClick={() => addNestedField("qualifications", "")}
              >
                Add Qualification
              </Button>

              <Typography variant="h6">Certifications</Typography>
              {formData.certifications.map((certification, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", gap: 2, alignItems: "center" }}
                >
                  <TextField
                    fullWidth
                    label={`Certification ${index + 1}`}
                    value={certification}
                    onChange={(e) =>
                      handleNestedChange(
                        index,
                        null,
                        e.target.value,
                        "certifications"
                      )
                    }
                  />
                  <IconButton
                    color="error"
                    onClick={() => removeNestedField("certifications", index)}
                  >
                    <IconRowRemove />
                  </IconButton>
                </Box>
              ))}
              <Button
                startIcon={<IconPlus />}
                variant="outlined"
                onClick={() => addNestedField("certifications", "")}
              >
                Add Certification
              </Button>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
                onClick={handleSubmit}
                disabled={updateStatus === "pending"}
              >
                {updateStatus === "pending" ? (
                  <CircularProgress size={24} />
                ) : (
                  "Update Employee"
                )}
              </Button>
            </Box>
          </FormControl>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default EditEmployee;
