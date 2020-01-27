import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import JumboIntro from "../component/jumboIntro";
import Projects from "../component/projects";
import { Footer } from "../component/footer";

export const Home = () => (
	<div>
		<JumboIntro />
		<div className="container-fluid">
			<Projects />
			<center>
				<div className="text-center mt-5" style={{ position: "absolute", top: "1100px" }}>
					<br />
					<br />
					<br />
					<h1>Hello!</h1>
					<p>{/* <img src={rigoImage} /> */}</p>
					<a href="#" className="btn btn-success">
						If you see this green button, bootstrap is working
					</a>
				</div>
			</center>
		</div>
	</div>
);
