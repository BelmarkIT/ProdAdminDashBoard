import React, { useState } from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Paper } from '@material-ui/core';

import SpecDashboard from './components/SpecDashboard';
import OverviewDashboard from './components/OverviewDashboard';

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
	const classes = useStyles();

	// This will be a material as of right now
	const [displayData, setDisplayData] = useState(null);

	return (
		<Paper>
			<div className={classes.root}>
				<ThemeProvider theme={theme}>
					<Router>
						<Route exact path='/Belmark/ProdAdminDashBoard/Spec'>
							<SpecDashboard
								displayData={displayData}
								setDisplayData={setDisplayData}
							/>
						</Route>
						<Route exact path='/Belmark/ProdAdminDashBoard/'>
							<OverviewDashboard
								displayData={displayData}
								setDisplayData={setDisplayData}
							/>
						</Route>
					</Router>
				</ThemeProvider>
			</div>
		</Paper>
	);
}

export default App;
