import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isSidebarOpen: false,
};

const sidebarslice = createSlice({
   name: 'sidebar',
   initialState,
   reducers: {
      sidebarOpen: (state, action) => {
         state.isSidebarOpen = true;
      },
      sidebarClose: (state, action) => {
         state.isSidebarOpen = false;
      },
   },
});
export const { sidebarOpen, sidebarClose } = sidebarslice.actions;
export default sidebarslice.reducer;
