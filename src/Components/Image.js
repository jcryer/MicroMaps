import groundFloor from "../assets/ground_floor.jpg";
import firstFloor from "../assets/first_floor.jpg";
import secondFloor from "../assets/second_floor.jpg";
import thirdFloor from "../assets/third_floor.jpg";
import routeOneGround from "../assets/route_1_ground.jpg";
import routeTwoGround from "../assets/route_2_ground.jpg";
import routeTwoFirst from "../assets/route_2_first.jpg";
import routeThreeGround from "../assets/route_3_ground.jpg";
import routeThreeThird from "../assets/route_3_third.jpg";

function Image({ imgName, width, height, xOffset, yOffset }) {
	let img;
	switch (imgName) {
		case "ground":
			img = groundFloor;
			break;
		case "first":
			img = firstFloor;
			break;
		case "second":
			img = secondFloor;
			break;
		case "third":
			img = thirdFloor;
			break;
		case "route_1_ground":
			img = routeOneGround;
			break;
		case "route_2_ground":
			img = routeTwoGround;
			break;
		case "route_2_first":
			img = routeTwoFirst;
			break;
		case "route_3_ground":
			img = routeThreeGround;
			break;
		case "route_3_third":
			img = routeThreeThird;
			break;
		default:
			console.log("Not an image");
			break;
	}

	return (
		<img
			src={img}
			width={width}
			height={height}
			draggable={false}
			style={{ zIndex: -1, left: -xOffset, top: -yOffset, position: "absolute" }}
		/>
	);
}

export default Image;
