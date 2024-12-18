import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchReports = createAsyncThunk(
  "report/fetchReports",
  async () => {
    const response = await axiosInstance.get("/report");
    return response.data;
  }
);

export const generateReport = createAsyncThunk(
  "report/generateReport",
  async () => {
    const response = await axiosInstance.post("/report/generate");
    return response.data;
  }
);

const reportSlice = createSlice({
  name: "report",
  initialState: {
    reports: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReports.fulfilled, (state, { payload }) => {
        state.reports = payload;
        state.status = "success";
      })
      .addCase(fetchReports.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(generateReport.pending, (state) => {
        state.status = "loading";
      })
      .addCase(generateReport.fulfilled, (state, { payload }) => {
        state.reports.push(payload);
        state.status = "success";
      })
      .addCase(generateReport.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default reportSlice.reducer;
