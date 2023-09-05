import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGlobalSettings } from '@/types/redux_types';

export const initialState: IGlobalSettings = {
  isTechnicalWork: false,
  language: 'default',
};

export const GlobalSettingsSlice = createSlice({
  name: 'global_settings',
  initialState,
  reducers: {
    GlobalUpdateLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    GlobalUpdateTechWork(state, action: PayloadAction<boolean>) {
      state.isTechnicalWork = action.payload;
    },
  },
});

export default GlobalSettingsSlice.reducer;
