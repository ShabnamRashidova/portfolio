import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/shabnam-rashidova-424253207/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100079224417209" target="blank">
        <AiFillFacebook />
      </a>
      <a href="https://github.com/ShabnamRashidova" target="blank">
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
