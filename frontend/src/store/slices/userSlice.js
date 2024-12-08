import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

const loadUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Failed to load user from localStorage", error);
    return null;
  }
};

const saveUserToLocalStorage = (user) => {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error("Failed to save user to localStorage", error);
  }
};

const storedUser = loadUserFromLocalStorage();

const initialState = {
  user_id: storedUser?.user_id || null,
  user_name: storedUser?.user_name || null,
  user_email: storedUser?.user_email || null,
  token: storedUser?.token || null,
  role: storedUser?.role || null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      const data = response.data;
      saveUserToLocalStorage(data);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user_name, user_email, token, role } = action.payload;
      state.user_name = user_name;
      state.user_email = user_email;
      state.token = token;
      state.role = role;
      saveUserToLocalStorage(state);
    },
    logout: (state) => {
      state.user_name = null;
      state.user_email = null;
      state.token = null;
      state.role = null;
      localStorage.removeItem("user");
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        const { user_name, user_email, token, role } = action.payload;
        state.user_name = user_name;
        state.user_email = user_email;
        state.token = token;
        state.role = role;
        saveUserToLocalStorage(state);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, logout, setLoading, setError } = userSlice.actions;
export const selectUser = (state) => state.user;
export const selectIsLoggedIn = (state) => Boolean(state.user.token);
export default userSlice.reducer;
