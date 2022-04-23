import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";

function SearchBar() {
	return (
		<TextField
			label="With normal TextField"
			InputProps={{
				endAdornment: (
					<InputAdornment>
						<IconButton>
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}

export default SearchBar;