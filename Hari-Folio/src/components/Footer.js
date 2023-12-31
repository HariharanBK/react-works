import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedInIcon";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        {/* <LinkedInIcon /> */}
      </div>
      <p> &copy;copyright 2023 </p>
    </div>
  );
}

export default Footer;
