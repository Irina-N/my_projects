import React from 'react';

import { Button, Col } from 'react-bootstrap';

function Victory ({startNewGameFunc}) {
	return (
			<Col className='d-flex flex-column align-items-center justify-content-start mb-2'>
				<h3>You won!</h3>
				<p>Do you want to <Button variant='success' onClick={() => startNewGameFunc()}>PLAY AGAIN?</Button></p>
			</Col>
	)
}

export default Victory;