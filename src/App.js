import { Image, Logo, SearchBar, SearchDropDown, FloorSelect, RouteTypeDialog } from "./Components";
import { useRef, useState, useEffect } from "react";

import Draggable from "react-draggable";

const MIN_SCALE = 500;
const MAX_SCALE = 1000;

const HEIGHT_RATIO = 1.634;

const defaultMaps = ["ground", "first", "second", "third"];

const searchData = [
	{
		title: "Edge Toilet Ground Floor",
		stepFree: true,
		map: "logo",
		levels: ["route_1_ground", null, null, null],
	},
	{
		title: "Edge Toilet Floor 1",
		stepFree: true,
		map: "logo",
		levels: ["route_2_ground", "route_2_first", null, null],
	},
	{
		title: "Edge Toilet Floor 3",
		stepFree: false,
		map: "logo",
		levels: ["route_3_ground", null, null, "route_3_third"],
	},
];

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

	const [mapSize, setMapSize] = useState(500);

	const [showSearchScreen, setShowSearchScreen] = useState(false);

	const [currentImage, setCurrentImage] = useState("ground");

	const [currentLevel, setCurrentLevel] = useState(0);

	const [maps, setMaps] = useState(defaultMaps);

	const [search, setSearch] = useState("");

	const [route, setRoute] = useState({});
	const [routeDialog, setRouteDialog] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: -200 });


	let upHandler = useKeyPress("ArrowUp");
	let downHandler = useKeyPress("ArrowDown");

	useEffect(() => {
		if (upHandler) {
			setMapSize((x) => x-10 < MAX_SCALE ? x + 10 : x);
		}
		if (downHandler) {
			setMapSize((x) => x+10 > MIN_SCALE ? x - 10 : x);
		}
	}, [mapSize, upHandler, downHandler, setMapSize]);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		let selected = searchData.find((x) => x.title === search);
		
		if (!selected) {
			setMaps(defaultMaps);
			return;
		}

		let levels = [...defaultMaps];
		selected.levels.map((x, index) => {
			levels[index] = (x == null) ? defaultMaps[index] : x;
		});
		setMaps(levels);
		setRouteDialog(true);
	}, [search]);

	const updateImage = (num) => {
		setCurrentImage(maps[num]);
	};

	return (
		<div
			style={{
				height: windowDimensions.height * 0.9,
				width: (windowDimensions.height * 0.9) / multiplier,
				border: "5px solid black",
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				flexDirection: "column",
				overflow: "hidden",
				backgroundColor: "white",
			}}
		>
			<RouteTypeDialog open={routeDialog} setOpen={setRouteDialog} />
			<SearchBar
				onClickFunc={(e) => {
					setShowSearchScreen(true);
				}}
				onBackClickFunc={(e) => {
					setShowSearchScreen(false);
				}}
				onCentreClick={(e) => {
					setCurrentLevel((x) => {
						updateImage(0);
						return 0;
					});
					setPosition({x: 0, y: -200});
					setMapSize(500);
				}}
				options={searchData.map((x) => {
					return x.title;
				})}
				value={search}
				setValue={setSearch}
			/>

			<FloorSelect
				increaseFunc={() => {
					if (currentLevel < 3) {
						setCurrentLevel((x) => {
							updateImage(x + 1);
							return x + 1;
						});
					}
				}}
				decreaseFunc={() => {
					if (currentLevel > 0) {
						setCurrentLevel((x) => {
							updateImage(x - 1);
							return x - 1;
						});
					}
				}}
				current={currentLevel}
			/>
			<div style={{ position: "relative", height: "100%", width: "100%" }}>
				<Draggable
				onDrag={(e, d) => {
					let x = d.x;
					let y = d.y;
					if (x > mapSize - 100) x = mapSize - 100;
					if (x < 150 - (mapSize)) x = 150 - (mapSize);
					if (y < -200 - mapSize) y = -200 - mapSize;
					if (y > mapSize - 200) y = mapSize - 250;
					setPosition({x: x, y: y});
					}}
					defaultPosition={{ x: 0, y: 0 }}
					position={position}
				>
					<div>
						<Image
							imgName={maps[currentLevel]}
							width={mapSize}
							xOffset={0}
							yOffset={0}
						/>
					</div>
				</Draggable>
			</div>
		</div>
	);
}

export default App;
