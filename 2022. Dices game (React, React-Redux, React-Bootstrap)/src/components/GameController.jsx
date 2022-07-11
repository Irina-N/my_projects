import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';

import Dices from './Dices/Dices';
import Victory from './Victory';
import { setMode } from '../store/reducers/config';
import { GameModes } from './../common/constants';

export const GameController = () => {
	
	const dispatch = useDispatch();

	const { mode, isVictory } = useSelector(state => state.config);
	const { EASY, NORMAL, HARD} = GameModes;

	const radios = [
		{ name: 'Low', value: EASY, variant: 'outline-success' },
		{ name: 'Medium', value: NORMAL, variant: 'outline-primary' },
		{ name: 'High', value: HARD, variant: 'outline-danger' }
	];
	
	return (
		<Container className='d-flex flex-column align-items-center'>
			<Row className='p-3'>
				<h1>Dices</h1>
			</Row>
			{ !mode &&
				<Row>
					<h4 className='text-center mb-4'>
						What level of difficulty do you prefer?
					</h4>
					<ButtonGroup>
						{radios.map((radio, idx) => (
							<ToggleButton
								key={idx}
								id={`radio-${idx}`}
								type='radio'
								variant={ radio.variant }
								name='radio'
								value={ radio.value }
								checked={ mode === radio.value }
								onChange={ e => dispatch(setMode(e.currentTarget.value)) }
							>
								{radio.name}
							</ToggleButton>
						))}
					</ButtonGroup>
				</Row>
			}
			{ mode && <Dices/> }
			{ isVictory && <Victory/> }
		</Container>
	)
};

export default GameController;