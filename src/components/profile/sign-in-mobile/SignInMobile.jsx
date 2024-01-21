import React from "react";
import {HandySvg} from "handy-svg";

import "./sign-in-mobile.css";
import person from "../../../img/icons/person.svg";

const SignInMobile = () => {
    return (
        <button type="button" className="sign-in_mobile">
            <HandySvg src={person} className="sign-in_mobile__icon"></HandySvg>
            <div className="sign-in_mobile__caption">войти</div>
        </button>
    );
}

export default SignInMobile;