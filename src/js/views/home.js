import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<br />
		<br />
		<br />
		<h1>Hello Nadia!</h1>
		<p>{/* <img src={rigoImage} /> */}</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
