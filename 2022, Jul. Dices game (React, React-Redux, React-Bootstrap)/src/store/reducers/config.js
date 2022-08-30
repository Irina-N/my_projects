import { createSlice } from '@reduxjs/toolkit';

export const configSlice = createSlice({
  name: 'config',
  initialState: {
		mode: null,
		isVictory: false
	},
  reducers: {

		setMode: (state, action) => {
			state.mode = action.payload;
		},

		setIsVictory: (state, action) => {
			state.isVictory = action.payload;
		},

	}, 
});

export const { setMode, setIsVictory } = configSlice.actions;
export const configReducer = configSlice.reducer;