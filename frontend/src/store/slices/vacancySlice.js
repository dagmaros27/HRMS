import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchVacancies = createAsyncThunk(
  "vacancy/fetchVacancies",
  async () => {
    const response = await axiosInstance.get("/job-vacancy");
    return response.data;
  }
);

export const addVacancy = createAsyncThunk(
  "vacancy/addVacancy",
  async (vacancy) => {
    const response = await axiosInstance.post("/job-vacancy", vacancy);
    return response.data;
  }
);

export const applyForVacancy = createAsyncThunk(
  "vacancy/applyForVacancy",
  async (application) => {
    const response = await axiosInstance.post(
      "/job-application/apply",
      application
    );
    return response.data;
  }
);
const vacancySlice = createSlice({
  name: "vacancy",
  initialState: {
    vacancies: [],
    fetchStatus: null, // Status for fetching vacancies
    addStatus: null, // Status for adding a vacancy
    applyStatus: null, // Status for applying to a vacancy
    error: null, // Store error messages
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Vacancies
      .addCase(fetchVacancies.pending, (state) => {
        state.fetchStatus = "loading";
        state.error = null;
      })
      .addCase(fetchVacancies.fulfilled, (state, { payload }) => {
        state.vacancies = payload;
        state.fetchStatus = "succeeded";
      })
      .addCase(fetchVacancies.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.error.message || "Failed to fetch vacancies.";
      })

      // Add Vacancy
      .addCase(addVacancy.pending, (state) => {
        state.addStatus = "loading";
        state.error = null;
      })
      .addCase(addVacancy.fulfilled, (state, { payload }) => {
        state.vacancies.push(payload);
        state.addStatus = "succeeded";
      })
      .addCase(addVacancy.rejected, (state, action) => {
        state.addStatus = "failed";
        state.error = action.error.message || "Failed to add vacancy.";
      })

      // Apply for Vacancy
      .addCase(applyForVacancy.pending, (state) => {
        state.applyStatus = "loading";
        state.error = null;
      })
      .addCase(applyForVacancy.fulfilled, (state) => {
        state.applyStatus = "succeeded";
      })
      .addCase(applyForVacancy.rejected, (state, action) => {
        state.applyStatus = "failed";
        state.error = action.error.message || "Failed to apply for vacancy.";
      });
  },
});

export default vacancySlice.reducer;
export const selectVacancies = (state) => state.vacancy.vacancies;
export const selectFetchStatus = (state) => state.vacancy.fetchStatus;
export const selectAddStatus = (state) => state.vacancy.addStatus;
export const selectApplyStatus = (state) => state.vacancy.applyStatus;
export const selectVacancyError = (state) => state.vacancy.error;
