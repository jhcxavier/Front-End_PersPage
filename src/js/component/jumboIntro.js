import React from "react";
import "../../styles/index.scss";

const JumboIntro = () => {
	return (
		<section className="jumbotron text-center">
			<video id="video-background" preload muted autoPlay loop>
				<source src="http://james-allen.ca/brap.mp4" type="video/mp4" />
			</video>
			<div className="container">
				<h1 className="jumbotron-heading">Projects</h1>
				<p className="lead text-muted">Something short </p>
			</div>
		</section>
	);
};
export default JumboIntro;
