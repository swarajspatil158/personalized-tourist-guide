import React from "react";
import "./homepage.scss";
const HomePage = () => {
  return (
    <div className="home-page">
      <video
        src={require("../../assets/nature-video.mp4")}
        muted
        autoPlay={"true"}
        preLoad="auto"
        loop
      ></video>
      <div className="overlay"></div>
      <div className="text">
        <h3>Never Stop From </h3>
        <h4>Exploring The World</h4>
        <a href="#foot-id">Explore</a>
      </div>
    </div>
  );
};

export default HomePage;
