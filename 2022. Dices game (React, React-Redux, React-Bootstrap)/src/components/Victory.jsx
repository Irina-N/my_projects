import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, Row, Col } from 'react-bootstrap';

import { setMode, setIsVictory } from '../store/reducers/config';
import { clearDicesVals, clearHistory } from '../store/reducers/dices';

export const Victory = () => {

	const dispatch = useDispatch();

	const startNewGame = () => {
		dispatch(clearDicesVals());
		dispatch(clearHistory());
		dispatch(setIsVictory(false));
		dispatch(setMode(null));
	}

	return (
		<Row>
			<Col className='d-flex flex-column align-items-center justify-content-start mb-2'>
				<h3>You won!</h3>
				<p>Do you want to <Button variant='success' onClick={startNewGame}>PLAY AGAIN?</Button></p>
			</Col>
		</Row>
	)
}

export default Victory;