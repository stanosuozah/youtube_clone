import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState("");
	const [videos, setVideos] = useState([]);
	const { id } = useParams();

	console.log(channelDetail);
	console.log(videos);

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data?.items[0])
		);
		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setVideos(data?.items)
		);
	}, [id]);
	return (
		<Box minHeight="95vh">
			<Box>
				<div
					style={{
						zIndex: 10,
						height: "300px",
						background:
							"linear-gradient(90deg, rgba(0,29,36,1) 0%, rgba(21,159,159,1) 37%, rgba(202,0,255,1) 95%)",
					}}
				/>
				<ChannelCard channelDetail={channelDetail} marginTop="-95px" />
			</Box>
			<Box display="flex" p="2">
				<Box sx={{ mr: { sm: "100px" } }} />
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
