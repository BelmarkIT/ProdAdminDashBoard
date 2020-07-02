import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';

const useStyles = makeStyles({
	graphSection: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		justifyItems: 'center',
	},
});

const GraphSection = ({ data, dashboard }) => {
	const classes = useStyles();

	let graphsToShow = [];

	if (dashboard === 'overview') {
		graphsToShow = [
			{ graphType: 'line', title: 'Dock Schedule', field: '' },
			{ graphType: 'bar', title: 'Slow Moving Inventory', field: '' },
			{ graphType: 'bar', title: 'Growth', field: '' },
			{ graphType: 'bar', title: 'Decline', field: '' },
		];
	} else if (dashboard === 'spec') {
		graphsToShow = [
			{ graphType: 'line', title: 'Year Over Year Usage', field: '' },
			{ graphType: 'line', title: 'Expected Usage', field: '' },
			{ graphType: 'bar', title: 'Open Customer Orders', field: '' },
		];
	}

	return (
		<section id='Graphs' className={classes.graphSection}>
			{graphsToShow.map((graph) => {
				if (graph.graphType === 'line') {
					return <LineGraph title={graph.title} />;
				} else if (graph.graphType === 'bar') {
					return <BarGraph title={graph.title} />;
				}
			})}
		</section>
	);
};

export default GraphSection;
