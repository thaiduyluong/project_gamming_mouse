import './footer.scss';
import React from 'react';
import { FaFacebook, FaYoutube, FaInstagramSquare, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className="container-footer">
            <div className="wrapper-footer">
                <div className="icon-action">
                    {/* Các liên kết tới các nền tảng mạng xã hội */}
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
            </div>
        </div>
    );
}

export default Footer;
