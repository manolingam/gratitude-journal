import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			maxWidth: 500
		}
	}
}));

function App() {
	const classes = useStyles();

	const [journal, setJournal] = useState([]);

	const [text, setText] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		let tempJournal = journal;
		if (text) {
			tempJournal.push(text);
			setJournal(tempJournal);
			setText('');
		}
	};

	return (
		<div className='App'>
			{console.log('rendered')}
			<p id='heading'>Omni Gratitude Journal</p>
			<p id='sub-title'>Give Gratitude! Get a Token!</p>
			<form
				className={classes.root}
				noValidate
				autoComplete='off'
				onSubmit={handleSubmit}
			>
				<input
					className='input'
					placeholder='What are you grateful for today?'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
			</form>
			<div className='journal-container'>
				{journal.map((item, index) => {
					return (
						<Paper
							key={index}
							className={classes.root}
							style={{ marginBottom: '10px' }}
						>
							<Typography component='p'>{item}</Typography>
						</Paper>
					);
				})}
			</div>
			<input className='email' placeholder='Email' />
			<div style={{ margin: '10px' }}>
				<Button variant='contained' style={{ margin: '10px' }}>
					Register
				</Button>
				<Button variant='contained'>Send</Button>
			</div>
		</div>
	);
}

export default App;
