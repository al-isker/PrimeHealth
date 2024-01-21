import React from "react";

import "./header-center.css";

import Logo from "../logo/Logo";
import Search from "../search/Search";
import Menu from "../menu/Menu";

const HeaderCenter = () => {
    return (
        <div className="header-center">
            <div className="container">
                <div className="header-center__wrapper">
                    <Logo />
                    <Search />
                    <Menu />
                </div>
            </div>
        </div>
    );
}

export default HeaderCenter;