import React from "react";

import "./logo.css";

import capsuleJar from "../../img/company/capsule-jar-2-full.png";

const Logo = () => {
    return (
        <div className="logo">
            <img src={capsuleJar} alt="capsule jar" className="logo__img"/>
            <strong className="logo__company-name">
                <h2 className="logo__h2">Prime</h2>
                <h1 className="logo__h1">Health</h1>
            </strong>
        </div>
    );
}

export default Logo;