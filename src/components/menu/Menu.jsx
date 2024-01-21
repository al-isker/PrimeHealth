import React from "react";
import {HandySvg} from "handy-svg";

import ProfileLink from "../profile/profile-link/ProfileLink";
import SignInDesktop from "../profile/sign-in-desktop/SignInDesktop";
import SignInMobile from "../profile/sign-in-mobile/SignInMobile";

import "./menu.css";
import truck from "../../img/icons/truck.svg";
import favorite from "../../img/icons/favorite.svg";
import cart from "../../img/icons/cart.svg";

const Menu = () => {
    return (
        <nav className="menu">
            <button type="button" className="menu__btn">
                <HandySvg src={truck} className="menu__icon menu__order" />
                <div className="menu__caption">заказы</div>
            </button>
            <button type="button" className="menu__btn">
                <HandySvg src={favorite} className="menu__icon menu__favorite" />
                <div className="menu__caption">избранное</div>
            </button>
            <button type="button" className="menu__btn">
                <HandySvg src={cart} className="menu__icon menu__cart" />
                <div className="menu__caption">корзина</div>
            </button>

            {/*
            переключать через:
             - SCSS(display: none/flex),
             - React компоненты, в зависимости от экрана.
            */}
            {/*<ProfileLink />*/}
            {/*<SignInMobile />*/}
            <SignInDesktop />
        </nav>
    );
}

export default Menu;