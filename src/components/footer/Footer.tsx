import React from "react";

import {AiOutlineLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";
import {FooterS} from "./Footer.Style";


const Footer: React.FC = () => {
    return (
        <FooterS>
            <p>Crypto tracker</p>
            <p>Handcrafted by Oz Shurki +972-545416161</p>
            <div className="social-links">
                <div className="social-link">
                    <a href="https://www.linkedin.com/in/oz-shurki/" target="_blank">
                        <AiOutlineLinkedin className="linkedin-icon"
                                           size="1.7rem"
                                           color="#7510F7"/>

                    </a>
                </div>
                <div className="social-link">
                    <a href="https://github.com/Ozshurki" target="_blank">
                        <FaGithubSquare className="github-icon"
                                        size="1.7rem"
                                        color="#7510F7"/>
                    </a>
                </div>
            </div>
        </FooterS>
    );
};

export default Footer;


