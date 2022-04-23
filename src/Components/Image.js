import logo from "../assets/logo.png";
import groundFloor from "../assets/ground_floor.jpg"
import firstFloor from "../assets/first_floor.jpg"
import secondFloor from "../assets/second_floor.jpg"
import thirdFloor from "../assets/third_floor.jpg"

function Image({imgName, width, height}) {
  let img;
	switch (imgName) {
		case "logo":
			img = logo;
      break;
    case "ground":
      img = groundFloor;
      break;
		default:
			console.log("Not an image");
			break;
	}
  return (<img src={img} width={width} height={height} draggable={false} style={{zIndex: -1}}/>)
}

export default Image;
