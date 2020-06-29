import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	header: {
		padding: '1rem',
	},
	title: {
		color: theme.palette.background.light,
		fontSize: '2.5rem',
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<span className={classes.title}>
				Tech Services / Production Admin Spec-Specific Dashboard
			</span>
		</header>
	);
};

export default Header;
