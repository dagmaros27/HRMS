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

const vacancySlice = createSlice({
  name: "vacancy",
  initialState: {
    vacancies: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVacancies.fulfilled, (state, { payload }) => {
        state.vacancies = payload;
        state.status = "success";
      })
      .addCase(fetchVacancies.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addVacancy.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addVacancy.fulfilled, (state, { payload }) => {
        state.vacancies.push(payload);
        state.status = "success";
      })
      .addCase(addVacancy.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default vacancySlice.reducer;
