import React from "react";
import {HandySvg} from "handy-svg";

import "./search.css";
import magnifier from "../../img/icons/magnifier.svg";
import closeSmall from "../../img/icons/close-small.svg";

const Search = () => {
    return (
        <div className="search">
            <input className="search__input" type="search" placeholder="Искать товары"/>
            <button className="search__btn-reset">
                <HandySvg className="search__icon" src={closeSmall} />
            </button>
            <button className="search__btn-search">
                <HandySvg className="search__icon" src={magnifier} />
            </button>
        </div>
    );
}

export default Search;