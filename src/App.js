import { Image, SearchBar, SearchDropDown } from "./Components";
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
						let x = e.currentTarget.getAttribute("map");
						console.log(String(x));
						setCurrentImage(x);
						setShowSearchScreen(false);
					}}
				/>
			) : (
				false
			)}

			<Draggable
				bound={"parent"}
				defaultPosition={{ x: 100, y: 100 }}
				position={null}
			>
				<div>
					<Image imgName={currentImage} width={mapSize} />
				</div>
			</Draggable>
		</div>
	);
}

export default App;
