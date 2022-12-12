import React from "react";
import video from "/videos/hotelVideo.mp4";


const BackgroundEffect = () => {
  return (
    <video className="text-center rounded-3xl" width="100%" autoPlay loop muted>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default BackgroundEffect;
