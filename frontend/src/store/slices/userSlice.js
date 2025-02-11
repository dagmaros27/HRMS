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
    const { user_name, user_email, token, user_role, user_id } = user;
    const userData = { user_name, user_email, token, user_role, user_id };
    localStorage.setItem("user", JSON.stringify(userData));
  } catch (error) {
    console.error("Failed to save user to localStorage", error);
  }
};

const storedUser = loadUserFromLocalStorage();

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      const data = response.data;
      console.log(data);
      saveUserToLocalStorage(data);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  }
);

export const registerApplicant = createAsyncThunk(
  "user/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/applicant/register",
        credentials
      );
      const data = response.data;
      console.log(data);
      saveUserToLocalStorage(data);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async ({ userId, userRole }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/profile", {
        userId,
        userRole,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to get user profile."
      );
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (updatedData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/user/profile", updatedData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update user profile."
      );
    }
  }
);

const initialState = {
  user_id: storedUser?.user_id || null,
  user_name: storedUser?.user_name || null,
  user_email: storedUser?.user_email || null,
  token: storedUser?.token || null,
  user_role: storedUser?.user_role || null,
  loading: false,
  error: null,
  userProfile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user_name, user_email, token, user_role, user_id } =
        action.payload;
      state.user_name = user_name;
      state.user_email = user_email;
      state.user_id = user_id;
      state.token = token;
      state.user_role = user_role;
      saveUserToLocalStorage(state);
    },
    logout: (state) => {
      state.user_name = null;
      state.user_email = null;
      state.token = null;
      state.user_role = null;
      state.user_id = null;
      state.loading = false;
      state.error = null;
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
        const { user_name, user_email, token, user_role, user_id } =
          action.payload;
        state.user_name = user_name;
        state.user_email = user_email;
        state.token = token;
        state.user_role = user_role;
        state.user_id = user_id;
        saveUserToLocalStorage(state);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerApplicant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerApplicant.fulfilled, (state, action) => {
        state.loading = false;
        const { user_name, user_email, token, user_role, user_id } =
          action.payload;
        state.user_name = user_name;
        state.user_email = user_email;
        state.token = token;
        state.user_role = user_role;
        state.user_id = user_id;
        saveUserToLocalStorage(state);
      })
      .addCase(registerApplicant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfile = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, logout, setLoading, setError } = userSlice.actions;
export const selectUser = (state) => state.user;
export const selectUserProfile = (state) => state.user.userProfile;
export const selectIsLoggedIn = (state) => Boolean(state.user.token);
export default userSlice.reducer;
