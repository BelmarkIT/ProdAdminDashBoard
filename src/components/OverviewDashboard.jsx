import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from './Nav/Header';
import StatBoxesSection from './StatBoxes/StatBoxesSection';
import GraphSection from './Graphs/GraphSection';
import GetDataSection from './No Data/GetDataSection';

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const OverviewDashboard = ({ displayData, setDisplayData }) => {
	const classes = useStyles();

	return (
		<>
			<Header title='Overview' />
			<GetDataSection setDisplayData={setDisplayData} />
			<StatBoxesSection data={displayData} dashboard='overview' />
			<GraphSection data={displayData} dashboard='overview' />
		</>
	);
};

export default OverviewDashboard;
