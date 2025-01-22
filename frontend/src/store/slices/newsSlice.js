import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  console.log(axiosInstance.interceptors.request);
  const response = await axiosInstance.get("/news");
  return response.data;
});

export const addNews = createAsyncThunk("news/addNews", async (news) => {
  const response = await axiosInstance.post("/news", news);
  return response.data;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    fetchStatus: null,
    addStatus: null,
  },
  reducers: {
    resetAddStatus: (state) => {
      state.addStatus = null; // Reset only the add status
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch News
      .addCase(fetchNews.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.news = payload;
        state.fetchStatus = "success";
      })
      .addCase(fetchNews.rejected, (state) => {
        state.fetchStatus = "failed";
      })
      // Add News
      .addCase(addNews.pending, (state) => {
        state.addStatus = "loading";
      })
      .addCase(addNews.fulfilled, (state, { payload }) => {
        state.news.push(payload);
        state.addStatus = "success";
      })
      .addCase(addNews.rejected, (state) => {
        state.addStatus = "failed";
      });
  },
});

export const { resetAddStatus } = newsSlice.actions;
export default newsSlice.reducer;
