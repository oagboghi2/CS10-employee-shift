import React, { Component } from "react";
import { FooterStyles } from "../../styles/Landing.js";
import Twitter from "../Molecules/TwitterIcon.js";
import Facebook from "../Molecules/FacebookIcon.js";

import "../../styles/LandingRef.css";


class LandingFooter extends Component {
    render(){
        return (
            <div>
            <FooterStyles>
                <footer className="landingFooter">
                    <span className="copyright">Copyright 2018</span>
                <div className="LandingLogo">
                    <Twitter/> 
                </div> 
                <div className="LandingLogo">
                    <Facebook/>
                </div> 
                </footer>
            </FooterStyles>
            </div>
        );
    }
}

export default LandingFooter;