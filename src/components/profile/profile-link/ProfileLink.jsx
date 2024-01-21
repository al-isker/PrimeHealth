import React from "react";
import {HandySvg} from "handy-svg";

import "./profile-link.css";
import person from "../../../img/icons/person.svg";

const ProfileLink = () => {
    return (
        <button type="button" className="profile-link">
            <HandySvg src={person} className="profile-link__icon"></HandySvg>
            <div className="profile-link__caption">профиль</div>
        </button>
    );
}

export default ProfileLink;