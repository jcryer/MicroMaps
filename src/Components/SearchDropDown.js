import { Container } from "@mui/material";
import * as React from "react";
import { Grid } from "@mui/material";
import { Accessible } from "@material-ui/icons";
import NotAccessibleIcon from "@mui/icons-material/NotAccessible";

const data = [
	{ title: "Edge Toilet Ground Floor", stepFree: true, map: "logo", level: 0 },
	{ title: "Edge Toilet Floor 1", stepFree: true, map: "logo", level: 1 },
	{ title: "Edge Toilet Floor 3", stepFree: false, map: "logo", level: 3 },
];

function SearchDropDown({ clickRouteFunc }) {
	return (
		<div style={{zIndex: 1}}>
			<Grid container spacing={0}>
				{data.map((x) => {
					return (
						<>
							<Grid item xs={11}>
								<div
									onClick={clickRouteFunc}
									map={x.map}
									level={x.level}
									key={x.title}
								>
									{x.title}
								</div>
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
