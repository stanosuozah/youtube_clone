import React from "react";
import { Link } from "react-router-dom";
import { Typography, CardContent, Card, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelTitle,
	demoChannelUrl,
} from "../utils/constant";
const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	// console.log(videoId, snippet);
	return (
		<Card
			sx={{
				width: { xs: "100%", sm: "358px", md: "320px" },
				boxShadow: "none",
				borderRadius: 0,
			}}
		>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
					sx={{
						width: {
							xs: "100%",
							sm: "358px",
							md: "320px",
						},
						height: 180,
					}}
					alt={snippet?.title}
					image={snippet?.thumbnails?.high?.url}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: "#1e1e1e", height: 106 }}>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography variant="subtitle1" color="#fff" fontWeight="bold">
						{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>
			</CardContent>

			<Link
				to={
					snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
				}
			>
				<CardMedia
					sx={{ width: 358, height: 180 }}
					alt={snippet?.title}
					image={snippet?.thumbnails?.high?.url}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: "#1e1e1e", height: 106 }}>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography variant="subtitle2" color="gray" fontWeight="bold">
						{snippet?.channelTitle || demoChannelTitle}
						<CheckCircle sx={{ fontSize: 12, ml: "5px", color: "gray" }} />
					</Typography>
				</Link>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
