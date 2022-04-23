import logo from "../assets/logo.png";

function Image({imgName}) {
	switch (imgName) {
		case "logo":
			return <img src={logo} />;
		default:
			console.log("Not an image");
			break;
	}
}

export default Image;
