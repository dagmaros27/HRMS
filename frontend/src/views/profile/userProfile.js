import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile, // Adjust this to a unified fetch action
  updateUserProfile, // Unified update action
  selectUserProfile,
} from "../../store/slices/userSlice"; // Adjust to a unified slice
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
  IconButton,
  FormControl,
} from "@mui/material";
import { IconPlus, IconRowRemove } from "@tabler/icons-react";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUserProfile);
  const { error, status } = useSelector((state) => state.user);
  const updateStatus = status;

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
    resume: "",
    role: "", // Add a role field
  });

  useEffect(() => {
    dispatch(fetchUserProfile());
    console.log(user);
    return () => {
      dispatch({ type: "user/resetStatus" });
    };
  }, [dispatch]);

  useEffect(() => {
    if (user && Object.keys(user).length) {
      setFormData({
        ...formData,
        ...user,
      });
    }
  }, [user]);

  useEffect(() => {
    if (updateStatus === "succeeded") {
      navigate("/users");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ _id: id, ...formData }));
  };

  return (
    <PageContainer title="Edit User" description="Edit User Profile">
      <DashboardCard
        title="Edit User"
        action={
          <Link to="/users">
            <Button variant="outlined" color="primary">
              Back
            </Button>
          </Link>
        }
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {updateStatus === "loading" && <CircularProgress />}
          {updateStatus === "failed" && <Alert severity="error">{error}</Alert>}
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
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {formData.role === "Employee" && (
                <>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <TextField
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
                    </Box>
                  ))}
                </>
              )}
              {formData.role === "Applicant" && (
                <>
                  <TextField
                    fullWidth
                    label="Resume"
                    name="resume"
                    value={formData.resume}
                    onChange={handleChange}
                  />
                </>
              )}
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
                  "Update User"
                )}
              </Button>
            </Box>
          </FormControl>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default UserProfile;
