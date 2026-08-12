import { createSlice } from "@reduxjs/toolkit";
import { fetchLocationApi } from "./location-api";

const initialState = {
    locationData: [],
    loading: false
}

const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {},
    selectors: {
        getlocations: (state) => state.locationData
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocationApi.fulfilled, (state, action) => {
                state.locationData = action.payload.response;
                state.loading = false;
            })
            .addCase(fetchLocationApi.rejected, (state) => {
                state.locationData = [];
                state.loading = false;
            })
            .addCase(fetchLocationApi.pending, (state) => {
                state.loading = true;
            })

    }
})

export const { getlocations } = locationSlice.selectors;

export default locationSlice.reducer;