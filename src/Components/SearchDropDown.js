import { Container } from "@mui/material";
import * as React from "react";
import { Grid } from "@mui/material";
import { Accessible } from "@material-ui/icons";
import NotAccessibleIcon from '@mui/icons-material/NotAccessible';

const data = [
	{ title: "Edge Toilet Ground Floor", stepFree: true },
	{ title: "Edge Toilet Floor 1", stepFree: true },
	{ title: "Edge Toilet Floor 3", stepFree: false },
];

function SearchDropDown() {
	return (
		<div>
			<Grid container spacing={0}>
				{data.map((x) => {
					return (
						<>
							<Grid item xs={11}>
								{x.title}
							</Grid>

							<Grid item xs={1}>
								{x.stepFree ? <Accessible /> : <NotAccessibleIcon />}
							</Grid>
						</>
					);
				})}
			</Grid>
		</div>
	);
}

export default SearchDropDown;
