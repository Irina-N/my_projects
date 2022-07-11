import { createSlice } from '@reduxjs/toolkit';

import { GameModes } from '../../common/constants';
import { setIsVictory } from './config';

export const dicesSlice = createSlice({
  name: 'dices',
  initialState: {
		currentDices: {},
		history: [],
	},	
  reducers: {

		setDicesVals: (state, action) => {
			state.currentDices = action.payload;
		},

		clearDicesVals: (state) => {
			state.currentDices = {};
		},

		addValsToHistory: (state, action) => {
			state.history.push(action.payload);
		},

		clearHistory: (state) => {
			state.history = [];
		}
	}, 
});

export const { setDicesVals, clearDicesVals, addValsToHistory, clearHistory } = dicesSlice.actions;

export const rollDices = (diceQuantity) => (dispatch) => {
	const getDiceValue = () => {
		return Math.floor(Math.random() * 6 + 1);
	}
	const dices = {};

	for (let i = 1; i <= diceQuantity; i++) {
			const val = getDiceValue();
			const diceName = `dice_${i}`
			dices[diceName] = val;
	}

	dispatch(setDicesVals(dices));
	dispatch(addValsToHistory(dices));
	dispatch(checkIfVictory(dices));
};

export const checkIfVictory = (dices) => (dispatch, getState) => {
	
	const mode = getState().config.mode;
	const { EASY, NORMAL, HARD} = GameModes;
	const { dice_1, dice_2, dice_3 } = dices;

	let isVictory = false;

	switch (mode) {
		case EASY:
			isVictory = ((dice_1 === dice_2 || dice_1 === dice_3 || dice_2 === dice_3) 
										&& dice_3 !== undefined);
			break;

		case NORMAL:
			isVictory = (dice_1 === dice_2 && dice_2 !== undefined);
			break;

		case HARD:
			isVictory = (dice_1 === dice_2 && dice_2 === dice_3 && dice_3 !== undefined);
			break;
	
		default:
			break;
	}

	if (isVictory) {dispatch(setIsVictory(true))};
};

export const dicesReducer = dicesSlice.reducer;