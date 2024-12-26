import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchApplications = createAsyncThunk(
  "application/fetchApplications",
  async (id) => {
    const response = await axiosInstance.get(`/job-application/vacancy/${id}`);
    console.log(id);
    console.log(response.data);
    return response.data;
  }
);

export const fetchApplicationById = createAsyncThunk(
  "application/fetchApplicationById",
  async (id) => {
    const response = await axiosInstance.get(`/job-application/${id}`);
    return response.data;
  }
);

export const addApplication = createAsyncThunk(
  "application/addApplication",
  async (applicationData) => {
    const response = await axiosInstance.post(
      "/job-application",
      applicationData
    );
    return response.data;
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    applications: [],
    vacancyApplications: [],
    selectedApplication: {},
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
      .addCase(fetchApplicationById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApplicationById.fulfilled, (state, { payload }) => {
        state.selectedApplication = payload;
        state.status = "success";
      })
      .addCase(fetchApplicationById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default applicationSlice.reducer;
export const selectApplications = (state) => state.application.applications;
export const selectVacancyApplications = (state) =>
  state.application.vacancyApplications;
export const selectSelectedApplication = (state) =>
  state.application.selectedApplication;
