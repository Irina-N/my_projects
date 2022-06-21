import React from 'react';

import './History.css';

function History ({history}) {

	return (
		<ul className='history' style={history.length > 11 ? {overflowY: 'scroll'} : null }>
			{history.map((log) => {
				return <li className='pe-3' key={log.tryNumber} >
									<b>Try № {log.tryNumber}:</b> {log.dice_1}-{log.dice_2}-{log.dice_3}
							</li>
			})}
		</ul>
	)
}

export default History;