import React from 'react';

import './Dice.css';

export const Dice = ({value}) => {
  
	return (
			<img className='dice' src={`img/no-${value}.png`} alt={`dice-${value}-dots`}></img>
	);
};

export default Dice;