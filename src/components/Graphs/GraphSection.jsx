import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';

const useStyles = makeStyles({
	graphSection: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		justifyItems: 'center',
		gap: '30px',
	},
});

const GraphSection = () => {
	const classes = useStyles();

	return (
		<section id='Graphs' className={classes.graphSection}>
			<LineGraph title='Year Over Year Usage' />
			<LineGraph title='Expected Usage' />
			<BarGraph title='Open Customer Orders' />
		</section>
	);
};

export default GraphSection;
