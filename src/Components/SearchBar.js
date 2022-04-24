import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Autocomplete, TextField } from "@mui/material";

export default function SearchBar({
	onCentreClick,
	onSettingsClick,
	options,
	value,
	setValue,
}) {
	return (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: "92%",
				marginTop: 3,
				zIndex: 1,
			}}
		>
			<IconButton
				sx={{ p: "10px" }}
				aria-label="menu"
				onClick={onSettingsClick}
			>
				<SettingsIcon />
			</IconButton>
			<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

			<Autocomplete
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				id="controllable-states-demo"
				options={options}
				sx={{ ml: 1, flex: 1, border: "none" }}
				renderInput={(params) => (
					<TextField {...params} label="Search MicroMaps" />
				)}
			/>
			{
				<IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
					<DirectionsIcon/>
				</IconButton>
			}
			<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
			<IconButton
				sx={{ p: "10px" }}
				aria-label="directions"
				onClick={onCentreClick}
			>
				<GpsFixedIcon color="action" />
			</IconButton>
		</Paper>
	);
}
