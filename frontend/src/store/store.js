import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import newsReducer from "./slices/newsSlice";
import vacancyReducer from "./slices/vacancySlice";

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  vacancy: vacancyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
