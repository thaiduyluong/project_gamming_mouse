import "./footer.scss";
import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="container-footer">
      <div className="wrapper-footer">
        <div className="acction-footer">
          <div className="content">
            <a>TÌM HIỂU</a>
            <a>LIÊN HỆ</a>
            <a>GIỚI THIỆU</a>
            <a>TÌM HIỂU</a>
          </div>
        </div>
        <div className="icon-action">
          <a href="#" className="face" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" className="you" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" className="insta" aria-label="Instagram">
            <FaInstagramSquare />
          </a>
          <a href="#" className="twi" aria-label="X (Twitter)">
            <FaXTwitter />
          </a>
          <a href="#" className="dis" aria-label="Discord">
            <FaDiscord />
          </a>
        </div>

        <div className="search-footer">
          <input type="text" placeholder="Tìm kiếm" />
          <span>
            <IoSearchOutline />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
