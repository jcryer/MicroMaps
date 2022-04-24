import * as React from "react";
import { Grid } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

function FloorSelect({ increaseFunc, decreaseFunc, current }) {
	return (
		<div style={{display: "flex", width: "100%", justifyContent: "right", marginRight: 20, zIndex: 1}}>
			<div>
				<div>
					<IconButton onClick={increaseFunc} aria-label="delete" disabled={current === 3}>
						<KeyboardArrowUpIcon style={{fontSize: 35 }} />
					</IconButton>
				</div>
				<div>
					<div style={{textAlign: "center", fontWeight: "bold"}}>L.{current}</div>
				</div>
				<div>
					<IconButton onClick={decreaseFunc} disabled={current === 0}>
						<KeyboardArrowDownIcon style={{fontSize: 35 }}/>
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default FloorSelect;
