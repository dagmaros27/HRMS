import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import newsReducer from "./slices/newsSlice";
import vacancyReducer from "./slices/vacancySlice";
import applicationReducer from "./slices/applicationSlice";
import leaveRequestReducer from "./slices/leaveRequestSlice";
import reportReducer from "./slices/reportSlice";
import trainingReducer from "./slices/trainingSlice";
import employeeReducer from "./slices/employeeSlice";

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  vacancy: vacancyReducer,
  application: applicationReducer,
  leaveRequest: leaveRequestReducer,
  report: reportReducer,
  training: trainingReducer,
  employee: employeeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
