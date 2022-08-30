import React from 'react';
import { useSelector } from 'react-redux';

import { GameModes } from './../../common/constants';

import './History.css';


export const History = () => {

	const history = useSelector(state => state.dices.history);
	const mode = useSelector(state => state.config.mode);

	return (
		<ul className='history' style={history.length > 11 ? {overflowY: 'scroll'} : null}>
			{history.map((vals, i) => {
				return <li className='pe-3' key={i} >
									<b>Try № {i + 1}:</b> { mode === GameModes.NORMAL ? 
																					`${vals.dice_1}-${vals.dice_2}` 
																					: 
																					`${vals.dice_1}-${vals.dice_2}-${vals.dice_3}` }
							</li>
			})}
		</ul>
	)
};

export default History;