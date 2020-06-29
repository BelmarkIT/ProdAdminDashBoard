import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import StatBox from './StatBox';

const useStyles = makeStyles((theme) => ({
	statBoxSection: {
		display: 'grid',
		gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) );',
		justifyItems: 'center',
	},
}));

const StatBoxesSection = ({ data }) => {
	const classes = useStyles();

	const {
		currentFootageOnHand,
		minimumFootageOnHand,
		daysLeftInInventory,
		currentFootageOnOrder,
		currentFootageCommited,
	} = data;

	return (
		<section id='StatBoxes' className={classes.statBoxSection}>
			<StatBox title='Current Footage On Hand:' data={currentFootageOnHand} />
			<StatBox title='Minimum Footage On Hand:' data={minimumFootageOnHand} />
			<StatBox title='Days Left In Inventory:' data={daysLeftInInventory} />
			<StatBox title='Current Footage On Order:' data={currentFootageOnOrder} />
			<StatBox
				title='Current Footage Commited:'
				data={currentFootageCommited}
			/>
		</section>
	);
};

export default StatBoxesSection;
