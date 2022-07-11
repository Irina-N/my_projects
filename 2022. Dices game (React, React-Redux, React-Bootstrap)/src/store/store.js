import { configureStore } from '@reduxjs/toolkit';
import { dicesReducer } from './reducers/dices';
import { configReducer } from './reducers/config';

export default configureStore({
  reducer: {
    dices: dicesReducer,
		config: configReducer,
  },
});
