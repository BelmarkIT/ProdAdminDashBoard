import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const useStyles = makeStyles((theme) => ({
	linksContainer: {
		display: 'grid',
		minWidth: 250,
		padding: '1rem',
	},
	link: {
		//textDecoration: 'none',
		color: '#fff',
	},
}));

const Drawer = ({ isOpen, toggleDrawer }) => {
	const classes = useStyles();
	return (
		<SwipeableDrawer
			anchor={'left'}
			open={isOpen}
			onClose={toggleDrawer(false)}
			onOpen={toggleDrawer(true)}
		>
			<div className={classes.linksContainer}>
				<Link className={classes.link} to='/'>
					Overview
				</Link>
				<Link className={classes.link} to='/Spec'>
					Spec Specific
				</Link>
			</div>
		</SwipeableDrawer>
	);
};

export default Drawer;
