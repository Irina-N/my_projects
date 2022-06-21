import React, {useState} from 'react';

import { Container, Row, Col, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

import Dice from './Dice/Dice';
import History from './History/History';
import Victory from './Victory';

function GameController () {
	const [config, setConfig] = useState({
		firstDiceVal: null,
		secondDiceVal: null,
		thirdDiceVal: null,
		history: [],
		isVictory: false,
		mode: null
	});

	const radios = [
    { name: 'Low', value: 'easy' },
    { name: 'High', value: 'hard' }
  ];
	
	const getDiceValue = () => {
		return Math.floor(Math.random() * 6 + 1)
	}

	const rollDices = () => {
		const dice_1_val = getDiceValue();
		const dice_2_val = getDiceValue();
		const dice_3_val = getDiceValue();
		const tryNumber = config.history.length + 1;
		
		setConfig({...config,
			firstDiceVal: dice_1_val,
			secondDiceVal: dice_2_val,
			thirdDiceVal: dice_3_val,
			history: [
				...config.history,
				{
					tryNumber: tryNumber,
					dice_1: dice_1_val, 
					dice_2: dice_2_val,
					dice_3: dice_3_val
				}
			],
			isVictory: (config.mode === 'easy') 
											? (dice_1_val === dice_2_val || dice_1_val === dice_3_val || dice_2_val === dice_3_val) 
											: (dice_1_val === dice_2_val && dice_2_val === dice_3_val) 
		});	
	}

	const startNewGame = () => {
		setConfig({...config,
			firstDiceVal: null,
			secondDiceVal: null,
			thirdDiceVal: null,
			history: [],
			isVictory: false,
			mode: null
		});
	}
	
	return (
		<Container className='d-flex flex-column align-items-center'>
			<Row className='p-3'><h1>Dices</h1></Row>
			{!config.mode &&
			<Row>
				<h4 className='text-center mb-4'>What level of difficulty do you prefer?</h4>
				<ButtonGroup>
					{radios.map((radio, idx) => (
						<ToggleButton
							key={idx}
							id={`radio-${idx}`}
							type='radio'
							variant={idx === 1 ? 'outline-danger' : 'outline-success'}
							name='radio'
							value={radio.value}
							checked={config.mode === radio.value}
							onChange={(e) => {
								setConfig({...config,
									mode: e.currentTarget.value,
								});
							}}
						>
							{radio.name}
						</ToggleButton>
					))}
				</ButtonGroup>
			</Row>}
			<Row className='gameField align-content-start justify-content-center'>
				{config.mode &&
					<Col xs={12} className='btnCol d-flex justify-content-center align-items-center mb-4'>				
					<Button className='rollDices' onClick={rollDices} disabled={config.isVictory}>Roll dices</Button>
				</Col>}
				{ config.firstDiceVal &&
				<Col className='d-flex justify-content-center align-items-center pe-3 mb-4' xs={12} sm={'auto'} >
						<Dice val = {config.firstDiceVal} />
						<Dice val = {config.secondDiceVal} />
						<Dice val = {config.thirdDiceVal} />
				</Col>}
				<Col xs={12} sm={'auto'} className='d-flex justify-content-center ps-4 pe-4'>
					<History history = {config.history} />
					</Col>
			</Row>
			<Row>
				{config.isVictory && <Victory startNewGameFunc={startNewGame} />}
			</Row>
		</Container>
	)
}

export default GameController;