
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




export const fetchBuildingsData = createAsyncThunk('users', async () => {
    const response = await axios.get("https://hfprojeplus.com/app/data_properties.php?lang=en&rooms&minbaths&minarea&appartments&extra");
    return response.data;
  });

export const buildingDataSlice  = createSlice({
    name: 'users',
    initialState: {
      users: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchBuildingsData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchBuildingsData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.users = action.payload;
          })
          .addCase(fetchBuildingsData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})

export default buildingDataSlice.reducer;