import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
// import Sidebar from "./Sidebar";
// import Videos from "./Videos";

const Feed = () => {
	const [selected, setSelected] = useState("New");

	//state for holding fetched videos
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selected}`).then((data) =>
			setVideos(data.items)
		);
	}, [selected]);

	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
			<Box
				sx={{
					height: { sx: "auto", md: "100vh" },
					borderRight: "1px solid #3d3d3d",
					px: { sx: 0, md: 2 },
				}}
			>
				<Sidebar selected={selected} setSelected={setSelected} />

				<Typography
					className="copyright"
					variant="body2"
					sx={{ mt: 1.5, color: "#fff" }}
				>
					Copyright Stanley Osuozah 2023
				</Typography>
			</Box>

			<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
				<Typography
					sx={{ color: "white", flex: 2 }}
					variant="h4"
					mb={2}
					fontWeight="bold"
				>
					{selected} <span style={{ color: "#F31503" }}>Videos</span>
				</Typography>
				<Videos videos={videos} />
			</Box>
		</Stack>
	);
};

export default Feed;
