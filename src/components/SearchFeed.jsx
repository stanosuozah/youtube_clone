import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
// import Sidebar from "./Sidebar";
// import Videos from "./Videos";

const SearchFeed = () => {
	// Storing search parameters
	const { searchTerm } = useParams();

	//state for holding fetched videos for search results
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
			setVideos(data.items)
		);
	}, [searchTerm]);

	return (
		<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
			<Typography
				sx={{ color: "white", height: "90vh", flex: 2 }}
				variant="h4"
				mb={2}
				fontWeight="bold"
			>
				Search Results for:{" "}
				<span style={{ color: "#F31503" }}>{searchTerm}</span>videos
			</Typography>
			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
