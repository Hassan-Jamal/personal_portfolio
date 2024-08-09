import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <div className="footer-section-title">Community</div>
            <a
              href="https://www.linkedin.com/in/hassan-jamal1/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaYoutube className="footer-link-icon" />
              <span className="footer-link-text">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Hassan-Jamal"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <RxGithubLogo className="footer-link-icon" />
              <span className="footer-link-text">GitHub</span>
            </a>
            <a
              href="https://www.reddit.com/user/syed_hassan_jamal/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <RxDiscordLogo className="footer-link-icon" />
              <span className="footer-link-text">Reddit</span>
            </a>
          </div>
          <div className="footer-section">
            <div className="footer-section-title">Social Media</div>
            <a
              href="https://www.facebook.com/profile.php?id=100051724837816&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <RxInstagramLogo className="footer-link-icon" />
              <span className="footer-link-text">Facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <RxTwitterLogo className="footer-link-icon" />
              <span className="footer-link-text">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-jamal1/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <RxLinkedinLogo className="footer-link-icon" />
              <span className="footer-link-text">LinkedIn</span>
            </a>
          </div>
          <div className="footer-section">
            <div className="footer-section-title">About</div>
            <a
              href="https://example.com/sponsor"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <span className="footer-link-text">Become a Sponsor</span>
            </a>
            <a
              href="https://example.com/about-me"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <span className="footer-link-text">Learn About Me</span>
            </a>
            <a
              href="mailto:hassanjamal6577987@gmail.com"
              className="footer-link"
            >
              <span className="footer-link-text">hassanjamal6577987@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; Hassan Jamal 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
