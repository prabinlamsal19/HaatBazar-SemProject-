import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.15752-9/277543584_437515024839161_8846520491987135668_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=LJ-uG-k2PH4AX8PJyjh&_nc_ht=scontent.fktm3-1.fna&oh=03_AVKWLiLMHZ1HGHRGAv24boycSkHlBwhlT8iQICkHVKTdGA&oe=626D9755"
              alt="Founder"
            />
            <Typography>Sumit Khanal</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a ecommerce wesbite made by @SumitKhanal and his team.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Know About Us In</Typography>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
