import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const response = await axiosInstance.get("/employee");
    return response.data;
  }
);

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee) => {
    const response = await axiosInstance.post("/employee", employee);
    return response.data;
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (employee) => {
    const response = await axiosInstance.put(
      `/employee/${employee.id}`,
      employee
    );
    return response.data;
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id) => {
    await axiosInstance.delete(`/employee/${id}`);
    return id;
  }
);

export const fetchEmployeeById = createAsyncThunk(
  "employee/getEmployeeById",
  async (id) => {
    const response = await axiosInstance.get(`/employee/${id}`);
    console.log(response.data);
    return response.data;
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    selectedEmployee: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const updatedEmployee = action.payload;
        const existingEmployee = state.employees.find(
          (employee) => employee.id === updatedEmployee.id
        );
        if (existingEmployee) {
          Object.assign(existingEmployee, updatedEmployee);
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        const id = action.payload;
        state.employees = state.employees.filter(
          (employee) => employee.id !== id
        );
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.selectedEmployee = action.payload || {}; // Ensure the payload is set
      });
  },
});

export default employeeSlice.reducer;
export const selectAllEmployees = (state) => state.employee.employees;
