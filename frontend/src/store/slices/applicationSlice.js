import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchApplications = createAsyncThunk(
  "application/fetchApplications",
  async () => {
    const response = await axiosInstance.get("/application");
    return response.data;
  }
);

export const addApplication = createAsyncThunk(
  "application/addApplication",
  async (applicationData) => {
    const response = await axiosInstance.post("/application", applicationData);
    return response.data;
  }
);

export const fetchApplicationByVacancy = createAsyncThunk(
  "application/fetchApplicationByVacancy",
  async (vacancyId) => {
    const response = await axiosInstance.get(
      `/application/vacancy/${vacancyId}`
    );
    return response.data;
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    applications: [],
    vacancyApplications: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApplications.fulfilled, (state, { payload }) => {
        state.applications = payload;
        state.status = "success";
      })
      .addCase(fetchApplications.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addApplication.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addApplication.fulfilled, (state, { payload }) => {
        state.applications.push(payload);
        state.status = "success";
      })
      .addCase(addApplication.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchApplicationByVacancy.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApplicationByVacancy.fulfilled, (state, { payload }) => {
        state.vacancyApplications = payload;
        state.status = "success";
      })
      .addCase(fetchApplicationByVacancy.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default applicationSlice.reducer;
export const selectApplications = (state) => state.application.applications;
export const selectVacancyApplications = (state) =>
  state.application.vacancyApplications;
