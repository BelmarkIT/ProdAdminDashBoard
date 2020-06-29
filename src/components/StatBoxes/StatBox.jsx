import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const StatBox = ({ title, data }) => {
	const useStyles = makeStyles((theme) => ({
		box: {
			padding: '1rem',
			borderRadius: 6,
			background: theme.palette.secondary.main,
		},
		title: {
			display: 'block',
		},
	}));

	const classes = useStyles();

	return (
		<div className={classes.box}>
			<span className={classes.title}>{title}</span>
			<span>{data}</span>
		</div>
	);
};

export default StatBox;
