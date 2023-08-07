import React from "react";
import pic from "./loa.png";

const LoadingComp = () => {
	return (
		<div
			style={{
				position: "absolute",
				zIndex: 9999,
				background: "rgba(255, 255, 255, 0.7)",
				height: "100vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				textAlign: "center",
				backdropFilter: "blur(5px)",
				left: 0,
				right: 0,
				top : 0,
				bottom : 0
			}}>
			<img style={{ width: "250px", height: "250px" }} src={pic} />
			<h2>Processing Your Request...</h2>
			<p>Please hang on while we fetch the right result.</p>
		</div>
	);
};

export default LoadingComp;
