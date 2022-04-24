import * as React from "react";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function FloorSelect({ increaseFunc, decreaseFunc }) {
	return (
		<Grid container>
			<Grid item xs={1}>
				<div onClick={increaseFunc}>
					<AddIcon />
				</div>
			</Grid>
			<Grid item xs={11} />
			<Grid item xs={1}>
				<div>0</div>
			</Grid>
			<Grid item xs={11} />
			<Grid item xs={1}>
				<div onClick={decreaseFunc}>
					<RemoveIcon />
				</div>
			</Grid>
			<Grid item xs={11} />
		</Grid>
	);
}

export default FloorSelect;
