import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import buildingdataReducer from '../../redux/reducers/dataslice';

export const store= configureStore({
  reducer: {
    users: buildingdataReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
})
});
