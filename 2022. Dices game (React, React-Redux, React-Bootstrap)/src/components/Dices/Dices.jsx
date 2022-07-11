
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Row, Col, Button } from 'react-bootstrap';

import Dice from './Dice';
import History from '../History/History';
import { rollDices } from '../../store/reducers/dices';
import { GameModes } from './../../common/constants';

import './Dices.css';


export const Dices = () => {

	const dispatch = useDispatch();

	const dices = useSelector(state => state.dices.currentDices);
	const { mode, isVictory } = useSelector(state => state.config);
	const diceQuantity = (mode === GameModes.NORMAL) ? 2 : 3;
	
	return (
		<Row className='gameField align-content-start justify-content-center'>
			<Col xs={12} className='btnCol d-flex justify-content-center align-items-center mb-4'>
				<Button 
					className='rollDices' 
					onClick={() => dispatch(rollDices(diceQuantity))} 
					disabled={isVictory}>
						Roll dices
				</Button>
			</Col>
			{ Object.keys(dices).length > 0 ? (
					<Col className='d-flex justify-content-center align-items-center pe-3 mb-4' xs={12} sm={'auto'} >
						{Object.keys(dices).map(diceName => {
							return <Dice key={diceName} value={dices[diceName]}></Dice>
						})}
					</Col>
				) : ('')
			}
			<Col xs={12} sm={'auto'} className='d-flex justify-content-center ps-4 pe-4'>
				<History/>
			</Col>
		</Row>
	)
};

export default Dices;