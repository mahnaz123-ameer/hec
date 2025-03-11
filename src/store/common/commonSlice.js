import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    pageTitle: null,
    breadcrumbsList: [],
    selectedGridIds: [],
  },
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload;
    },
    setBreadcrumbs: (state, action) => {
      state.breadcrumbsList = action.payload;
    },
    setSelectedGridIds: (state, action) => {
      state.selectedGridIds = action.payload;
    },
  },
});

export const { setPageTitle, setBreadcrumbs, setSelectedGridIds } = commonSlice.actions;
export default commonSlice.reducer;
