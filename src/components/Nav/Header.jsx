import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const Header = ({ title }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = (openOrClose) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setIsOpen(openOrClose);
	};

	const classes = useStyles();
	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'
					onClick={toggleDrawer(true)}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' className={classes.title}>
					{title}
				</Typography>
			</Toolbar>
			<Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
		</AppBar>
	);
};

export default Header;
