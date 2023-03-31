import React from "react";
import headerStyle from "./header.module.scss";
import layoutStyle from "./layout.module.scss";
import mainStyle from "./main.module.scss";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div
        className={`${layoutStyle.layout} ${headerStyle.layout} ${mainStyle.layout}`}
      >
        <figure className={headerStyle.logo__wrap}>
          <img src="./assets/images/logo.svg" alt="" />
        </figure>
        <div className={headerStyle.menu__btn}></div>
        <div className={headerStyle.nav__menu__wrap}>
          <nav className={headerStyle.nav__menu}>
            <a href="" className={headerStyle.nav__menu__item}>
              Home
            </a>
            <a href="" className={headerStyle.nav__menu__item}>
              New
            </a>
            <a href="" className={headerStyle.nav__menu__item}>
              Popular
            </a>
            <a href="" className={headerStyle.nav__menu__item}>
              Trending
            </a>
            <a href="" className={headerStyle.nav__menu__item}>
              Categories
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
