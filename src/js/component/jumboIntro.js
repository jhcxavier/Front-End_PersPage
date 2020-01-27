import React from "react";
import "../../styles/index.scss";

const JumboIntro = () => {
	return (
		<section className="jumbotron text-center">
			<video id="video-background" preload muted autoPlay loop>
				<source src="http://james-allen.ca/brap.mp4" type="video/mp4" />
			</video>
			<div className="container">
				<h1 className="jumbotron-heading">Album example</h1>
				<p className="lead text-muted">Something short </p>
				<p>
					<a href="#" className="btn btn-primary my-2">
						Main call to action
					</a>
					<a href="#" className="btn btn-secondary my-2">
						Secondary action
					</a>
				</p>
			</div>
		</section>
	);
};
export default JumboIntro;
