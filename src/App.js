import React, { useState, useEffect } from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header';
import StatBoxesSection from './components/StatBoxes/StatBoxesSection';
import GraphSection from './components/Graphs/GraphSection';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#731DD8',
		},
		secondary: {
			main: '#48A9A6',
		},
		background: {
			main: '#595758',
			dark: '#595758',
			light: '#E4DFDA',
		},
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		// background: theme.palette.background.paper,
		background: '#424242',
		textAlign: 'center',
		minHeight: '100vh',
	},
}));

function App() {
	const [data, setData] = useState({
		currentFootageOnHand: 0,
		minimumFootageOnHand: 0,
		daysLeftInInventory: 0,
		currentFootageOnOrder: 0,
		currentFootageCommited: 0,
	});
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<Header />
				<StatBoxesSection data={data} />
				<GraphSection data={data} />
			</ThemeProvider>
		</div>
	);
}

export default App;
