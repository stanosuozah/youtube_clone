import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";
import { Link } from "react-router-dom";
import { Category } from "@mui/icons-material";

const Sidebar = ({ selected, setSelected }) => (
	<Stack
		direction="row"
		sx={{
			overflow: "auto",
			height: { sx: "auto", md: "95%" },
			flexDirection: { md: "column" },
		}}
	>
		{categories.map((cat) => (
			<button
				className="category-btn"
				style={{
					background: cat.name === selected && "#fc1503",
					color: "white",
				}}
				key={cat.name}
				onClick={() => setSelected(cat.name)}
			>
				<span
					style={{
						color: cat.name === selected ? "white" : "red",
						marginRight: "15px",
					}}
				>
					{cat.icon}
				</span>
				<span
					style={{ opacity: cat.name === selected ? 1 : 0.8, fontSize: "12px" }}
				>
					{cat.name}
				</span>
			</button>
		))}
	</Stack>
);
export default Sidebar;
