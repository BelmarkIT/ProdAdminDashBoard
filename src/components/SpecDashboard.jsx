import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from './Nav/Header';
import StatBoxesSection from './StatBoxes/StatBoxesSection';
import GraphSection from './Graphs/GraphSection';
import GetDataSection from './No Data/GetDataSection';

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const SpecDashboard = ({ displayData, setDisplayData }) => {
	const classes = useStyles();

	return (
		<>
			<Header title='Spec-Specific Dashboard' />
			<GetDataSection setDisplayData={setDisplayData} />
			<StatBoxesSection data={displayData} dashboard='spec' />
			<GraphSection data={displayData} dashboard='spec' />
		</>
	);
};

export default SpecDashboard;
