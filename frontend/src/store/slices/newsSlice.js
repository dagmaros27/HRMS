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
    status: null,
  },
  reducers: {}, // In case you have other reducers to define
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.news = payload;
        state.status = "success";
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNews.fulfilled, (state, { payload }) => {
        state.news.push(payload);
        state.status = "success";
      })
      .addCase(addNews.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default newsSlice.reducer;
