import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchTrainings = createAsyncThunk(
  "training/fetchTrainings",
  async () => {
    const response = await axiosInstance.get("/training");
    return response.data;
  }
);

export const addTraining = createAsyncThunk(
  "training/addTraining",
  async (trainingData) => {
    const response = await axiosInstance.post("/training", trainingData);
    return response.data;
  }
);

export const registerForTraining = createAsyncThunk(
  "training/registerForTraining",
  async (trainingId) => {
    const response = await axiosInstance.post(
      `/training/${trainingId}/register`
    );
    return response.data;
  }
);

export const myTrainings = createAsyncThunk(
  "training/myTrainings",
  async () => {
    const response = await axiosInstance.get("/training/my");
    return response.data;
  }
);

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    trainings: [],
    myTrainings: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrainings.fulfilled, (state, { payload }) => {
        state.trainings = payload;
        state.status = "success";
      })
      .addCase(fetchTrainings.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addTraining.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTraining.fulfilled, (state, { payload }) => {
        state.trainings.push(payload);
        state.status = "success";
      })
      .addCase(addTraining.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(registerForTraining.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerForTraining.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(registerForTraining.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(myTrainings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(myTrainings.fulfilled, (state, { payload }) => {
        state.myTrainings = payload;
        state.status = "success";
      })
      .addCase(myTrainings.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default trainingSlice.reducer;
export const selectTrainings = (state) => state.training.trainings;
export const selectMyTrainings = (state) => state.training.myTrainings;
