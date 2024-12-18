import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchLeaveRequests = createAsyncThunk(
  "leaveRequest/fetchLeaveRequests",
  async () => {
    const response = await axiosInstance.get("/leave-request");
    return response.data;
  }
);

export const addLeaveRequest = createAsyncThunk(
  "leaveRequest/addLeaveRequest",
  async (leaveRequestData) => {
    const response = await axiosInstance.post(
      "/leave-request",
      leaveRequestData
    );
    return response.data;
  }
);

export const myLeaveRequests = createAsyncThunk(
  "leaveRequest/myLeaveRequests",
  async () => {
    const response = await axiosInstance.get("/leave-request/my");
    return response.data;
  }
);

export const approveLeaveRequest = createAsyncThunk(
  "leaveRequest/approveLeaveRequest",
  async (leaveRequestId) => {
    const response = await axiosInstance.post(
      `/leave-request/${leaveRequestId}/approve`
    );
    return response.data;
  }
);

export const rejectLeaveRequest = createAsyncThunk(
  "leaveRequest/rejectLeaveRequest",
  async (leaveRequestId) => {
    const response = await axiosInstance.post(
      `/leave-request/${leaveRequestId}/reject`
    );
    return response.data;
  }
);

const leaveRequestSlice = createSlice({
  name: "leaveRequest",
  initialState: {
    leaveRequests: [],
    myLeaveRequests: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaveRequests.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLeaveRequests.fulfilled, (state, { payload }) => {
        state.leaveRequests = payload;
        state.status = "success";
      })
      .addCase(fetchLeaveRequests.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addLeaveRequest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addLeaveRequest.fulfilled, (state, { payload }) => {
        state.leaveRequests.push(payload);
        state.status = "success";
      })
      .addCase(addLeaveRequest.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(approveLeaveRequest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(approveLeaveRequest.fulfilled, (state, { payload }) => {
        state.leaveRequests = state.leaveRequests.map((leaveRequest) =>
          leaveRequest.id === payload.id ? payload : leaveRequest
        );
        state.status = "success";
      })
      .addCase(approveLeaveRequest.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(rejectLeaveRequest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(rejectLeaveRequest.fulfilled, (state, { payload }) => {
        state.leaveRequests = state.leaveRequests.map((leaveRequest) =>
          leaveRequest.id === payload.id ? payload : leaveRequest
        );
        state.status = "success";
      })
      .addCase(rejectLeaveRequest.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(myLeaveRequests.pending, (state) => {
        state.status = "loading";
      })
      .addCase(myLeaveRequests.fulfilled, (state, { payload }) => {
        state.myLeaveRequests = payload;
        state.status = "success";
      })
      .addCase(myLeaveRequests.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default leaveRequestSlice.reducer;
export const selectLeaveRequests = (state) => state.leaveRequest.leaveRequests;
export const selectMyLeaveRequests = (state) =>
  state.leaveRequest.myLeaveRequests;
