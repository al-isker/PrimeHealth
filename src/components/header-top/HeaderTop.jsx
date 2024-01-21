import React from "react";
import {HandySvg} from "handy-svg";

import "./header-top.css";

import map from "../../img/icons/location.svg";
import phone from "../../img/icons/call.svg";

const HeaderTop = () => {
    const number = 'tel:+79202228689';
    const address = 'https://yandex.ru/maps/-/CDubJB8X';

    return (
        <div className="header-top">
            <div className="container">
                <div className="header-top__wrapper">
                    <a className="header-top__address-block" href={address}>
                        <HandySvg className="header-top__icon" src={map}/>
                        <div className="header-top__address">г.Махачкала, ул.Пилотная, 57</div>
                    </a>
                    <a className="header-top__number-block" href={number}>
                        <HandySvg className="header-top__icon" src={phone}/>
                        <div className="header-top__number">+7(920)-222-86-89</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;