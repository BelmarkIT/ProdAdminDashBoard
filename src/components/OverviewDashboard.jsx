import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from './Nav/Header';
import StatBoxesSection from './StatBoxes/StatBoxesSection';
import GraphSection from './Graphs/GraphSection';

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const OverviewDashboard = () => {
	const classes = useStyles();

	const [data, setData] = useState({
		currentFootageOnHand: 0,
		minimumFootageOnHand: 0,
		daysLeftInInventory: 0,
		currentFootageOnOrder: 0,
		currentFootageCommited: 0,
	});

	return (
		<>
			<Header title='Overview' />
			<StatBoxesSection data={data} />
			<GraphSection />
		</>
	);
};

export default OverviewDashboard;
