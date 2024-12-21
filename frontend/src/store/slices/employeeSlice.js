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
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch employees
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Fetch employee by ID
      .addCase(fetchEmployeeById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedEmployee = action.payload || {};
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Create employee
      .addCase(createEmployee.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees.push(action.payload);
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Update employee
      .addCase(updateEmployee.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedEmployee = action.payload;
        const index = state.employees.findIndex(
          (employee) => employee._id === updatedEmployee._id
        );
        if (index !== -1) {
          state.employees[index] = updatedEmployee;
        }
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Delete employee
      .addCase(deleteEmployee.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = state.employees.filter(
          (employee) => employee._id !== action.payload
        );
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default employeeSlice.reducer;

export const selectAllEmployees = (state) => state.employee.employees;
export const selectEmployeeStatus = (state) => state.employee.status;
export const selectEmployeeError = (state) => state.employee.error;
export const selectSelectedEmployee = (state) =>
  state.employee.selectedEmployee;
