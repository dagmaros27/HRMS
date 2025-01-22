import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/employee");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch employees"
      );
    }
  }
);

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/employee", employee);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to create employee"
      );
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (employee, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/employee/${employee._id}`,
        employee
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to update employee"
      );
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/employee/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to delete employee"
      );
    }
  }
);

export const fetchEmployeeById = createAsyncThunk(
  "employee/fetchEmployeeById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/employee/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch employee"
      );
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    selectedEmployee: {},
    fetchStatus: "idle", // Status for fetch actions
    updateStatus: "idle", // Status for update actions
    error: null,
  },
  reducers: {
    clearStatusAndError: (state) => {
      state.fetchStatus = "idle";
      state.updateStatus = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchEmployeeById.pending, (state) => {
        state.fetchStatus = "loading";
        state.error = null;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.selectedEmployee = action.payload || {};
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.payload;
      })
      .addCase(fetchEmployees.pending, (state) => {
        state.fetchStatus = "loading";
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.payload;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(
          (employee) => employee._id !== action.payload
        );
      })

      // Update actions
      .addCase(updateEmployee.pending, (state) => {
        state.updateStatus = "loading";
        state.error = null;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.updateStatus = "succeeded";
        const updatedEmployee = action.payload;
        const index = state.employees.findIndex(
          (employee) => employee._id === updatedEmployee._id
        );
        if (index !== -1) {
          state.employees[index] = updatedEmployee;
        }
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearStatusAndError } = employeeSlice.actions;

export default employeeSlice.reducer;

export const selectAllEmployees = (state) => state.employee.employees;
export const selectEmployeeStatus = (state) => state.employee.status;
export const selectEmployeeError = (state) => state.employee.error;
export const selectSelectedEmployee = (state) =>
  state.employee.selectedEmployee;
