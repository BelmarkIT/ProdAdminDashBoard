import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import StatBox from './StatBox';

const useStyles = makeStyles((theme) => ({
	statBoxSection: {
		display: 'grid',
		gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) );',
		justifyItems: 'center',
		margin: '1rem',
	},
}));

const StatBoxesSection = ({ data, dashboard }) => {
	let boxesToDisplay = [];

	if (dashboard === 'overview') {
		boxesToDisplay = [
			{ title: 'Current Footage On Hand', field: 'currentFootageOnHand' },
			{ title: 'Minimum Footage On Hand', field: 'minimumFootageOnHand' },
			{ title: 'Days Left In Inventory', field: 'daysLeftInInventory' },
			{ title: 'Current Footage On Order', field: 'currentFootageOnOrder' },
			{ title: 'Current Footage Committed', field: 'currentFootageCommitted' },
		];
	} else if (dashboard === 'spec') {
		boxesToDisplay = [
			{ title: 'Total Material On Hand', field: 'totalMatlOnHand' },
			{ title: 'Total Material $ On Order', field: 'totalMatlOnOrder' },
			{ title: 'Total Material $ Committed', field: 'totalMatlCommitted' },
		];
	}
	const classes = useStyles();

	return (
		<section id='StatBoxes' className={classes.statBoxSection}>
			{boxesToDisplay.map((box) => {
				let boxData = 0;
				if (data === null) {
					boxData = 0;
				} else if (data[box.field] !== null) {
					boxData = data[box.field];
				}

				return <StatBox title={box.title} data={boxData} />;
			})}

			{/* <StatBox title='Current Footage On Hand:' data={currentFootageOnHand} />
			<StatBox title='Minimum Footage On Hand:' data={minimumFootageOnHand} />
			<StatBox title='Days Left In Inventory:' data={daysLeftInInventory} />
			<StatBox title='Current Footage On Order:' data={currentFootageOnOrder} />
			<StatBox
				title='Current Footage Commited:'
				data={currentFootageCommited}
			/> */}
		</section>
	);
};

export default StatBoxesSection;
