import React from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  Typography,
  IconButton,
} from "@mui/material";
import { IconPlus, IconRowRemove } from "@tabler/icons-react";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    position: "",
    employmentHistory: [
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
      },
    ],
    qualifications: [""],
    certifications: [""],
  });

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
    // TODO: Handle form submission
    console.log(formData);
  };

  return (
    <PageContainer title="Add Employee" description="this is Add Employee page">
      <DashboardCard
        title="Add Employee"
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
              >
                Add Employee
              </Button>
            </Box>
          </FormControl>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default AddEmployee;