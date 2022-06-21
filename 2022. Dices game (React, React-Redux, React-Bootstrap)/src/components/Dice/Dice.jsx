import React from 'react';

import './Dice.css';

function Dice ({val}) {
	
	return (
		<>
			<img className='dice' src={`img/no-${val}.png`} alt={`dice-${val}-dots`}></img>
		</>
	)
}

export default Dice;