import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function SearchBar({ onClickFunc, onBackClickFunc, isClicked }) {
	return (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: 400,
				marginTop: 3,
				zIndex: 1,
			}}
		>
			{!isClicked ? (
				<IconButton sx={{ p: "10px" }} aria-label="menu">
					<MenuIcon />
				</IconButton>
			) : (
				<IconButton onClick={onBackClickFunc} sx={{ p: "10px" }} aria-label="menu" >
					<ArrowBackIcon/>
				</IconButton>
			)}
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search MicroMaps"
				inputProps={{ "aria-label": "search micromaps" }}
				onClick={onClickFunc}
			/>
			<IconButton sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
			<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
			<IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
				<DirectionsIcon />
			</IconButton>
		</Paper>
	);
}
