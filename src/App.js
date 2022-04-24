import { Image, SearchBar, SearchDropDown, FloorSelect } from "./Components";
import { useRef, useState, useEffect } from "react";

import Draggable from "react-draggable";

const MAX_MAP_SIZE = 2000;
const MIN_MAP_SIZE = 10;

function useKeyPress(targetKey) {
	// State for keeping track of whether key is pressed
	const [keyPressed, setKeyPressed] = useState(false);
	// If pressed key is our target key then set to true
	function downHandler({ key }) {
		if (key === targetKey) {
			setKeyPressed(true);
		}
	}
	// If released key is our target key then set to false
	const upHandler = ({ key }) => {
		if (key === targetKey) {
			setKeyPressed(false);
		}
	};
	// Add event listeners
	useEffect(() => {
		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler);
		// Remove event listeners on cleanup
		return () => {
			window.removeEventListener("keydown", downHandler);
			window.removeEventListener("keyup", upHandler);
		};
	}, []); // Empty array ensures that effect is only run on mount and unmount
	return keyPressed;
}

function App() {
	var multiplier = 1.777;

	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}

	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	const [mapSize, setMapSize] = useState(1000);

	const [showSearchScreen, setShowSearchScreen] = useState(false);

	const [currentImage, setCurrentImage] = useState("ground");

	const [currentRoute, setCurrentRoute] = useState("none");

	const [currentRouteLevel, setCurrentRouteLevel] = useState(0);

	const [currentLevel, setCurrentLevel] = useState(0);

	let upHandler = useKeyPress("ArrowUp");
	let downHandler = useKeyPress("ArrowDown");

	useEffect(() => {
		if (upHandler) {
			setMapSize(mapSize + 10);
		}
		if (downHandler) {
			setMapSize(mapSize - 10);
		}
	}, [mapSize, upHandler, downHandler, setMapSize]);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const updateImage = () => {
		switch (currentLevel) {
			case 0:
				setCurrentImage("ground");
				break;
			case 1:
				setCurrentImage("first");
				break;
			case 2:
				setCurrentImage("second");
				break;
			case 3:
				setCurrentImage("third");
				break;
			default:
				console.log("Invalid floor number");
		}
	};

	console.log(currentLevel);

	return (
		<div
			style={{
				height: windowDimensions.height * 0.9,
				width: (windowDimensions.height * 0.9) / multiplier,
				border: "2px solid black",
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				flexDirection: "column",
				overflow: "hidden",
			}}
		>
			<SearchBar
				onClickFunc={(e) => {
					setShowSearchScreen(true);
				}}
				onBackClickFunc={(e) => {
					setShowSearchScreen(false);
				}}
				isClicked={showSearchScreen}
			/>

			{showSearchScreen ? (
				<SearchDropDown
					clickRouteFunc={(e) => {
						let map = e.currentTarget.getAttribute("map");
						let level = e.currentTarget.getAttribute("level");
						setCurrentRoute(map);
						setCurrentRouteLevel(level);
						setShowSearchScreen(false);
					}}
				/>
			) : (
				false
			)}

			<FloorSelect
				increaseFunc={() => {
					if (currentLevel < 3) {
						setCurrentLevel(currentLevel + 1);
						updateImage();
					}
				}}
				decreaseFunc={() => {
					if ((currentLevel) > 0) {
						setCurrentLevel(currentLevel - 1);
						updateImage();
					}
				}}
			/>

			<Draggable
				bound={"parent"}
				defaultPosition={{ x: 100, y: 100 }}
				position={null}
			>
				<div>
					<Image
						imgName={currentRoute === "none" ? currentImage : currentRoute}
						width={mapSize}
					/>
				</div>
			</Draggable>
		</div>
	);
}

export default App;
