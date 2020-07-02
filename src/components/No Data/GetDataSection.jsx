import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputLabel, Select, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	controlContainer: { display: '' },
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const GetDataSection = ({ setData }) => {
	const classes = useStyles();

	const [materialNum, setMaterialNum] = useState('');
	const [stockWidth, setStockWidth] = useState(null);
	const [stockWidthOpts, setStockWidthOpts] = useState(null);

	useEffect(() => {
		const getDropDowns = async () => {
			// let res = await fetch('blahblahblah');
		};
		getDropDowns();
	}, [materialNum]);

	return (
		<section id='GetData'>
			<h2>Enter Material Number</h2>
			<div className={classes.controlContainer}>
				<FormControl className={classes.formControl}>
					<TextField
						id='materialNumInput'
						label='Material #'
						value={materialNum}
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor='stockWidth'>Stock/Slit Width</InputLabel>
					<Select
						native
						value={stockWidth}
						onChange={(e) => {
							setStockWidth(e.target.value);
						}}
						inputProps={{
							name: 'stockWidth',
							id: 'stockWidth',
						}}
						disabled={stockWidthOpts == null}
					>
						<option aria-label='None' value='' />
					</Select>
				</FormControl>
			</div>
		</section>
	);
};

export default GetDataSection;
