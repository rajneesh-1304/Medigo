import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocationApi = createAsyncThunk(
    "location/fetchLocationApi",
    async (search: string, thunkApi) => {
        try {
            const response = await axios.post(
                "/api/locations",
                { search }
            );
            return { response: response?.data }
        } catch (error: any) {
            const errorMessage = error?.response?.data || error?.message;
            // showErrorNotification(errorMessage);
            return thunkApi.rejectWithValue(errorMessage);
        }
    }
)