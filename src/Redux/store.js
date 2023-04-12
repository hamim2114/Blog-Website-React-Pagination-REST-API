import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import blogSlice from "./blogSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    blogs: blogSlice
  }
});