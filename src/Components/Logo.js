import logo from "../assets/logo.png";

function Logo({width, height, scale }) {

	return (
		<img
			src={logo}
			width={width}
			height={height}
			draggable={false}
			style={{ zIndex: -1}}
		/>
	);
}

export default Logo;
