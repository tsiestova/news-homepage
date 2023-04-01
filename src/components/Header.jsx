import React, { useContext, useState } from "react";
import headerStyle from "./header.module.scss";
import layoutStyle from "./layout.module.scss";
import mainStyle from "./main.module.scss";
import { ModalContext } from "../App";

const Header = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);

  return (
    <header className={headerStyle.header}>
      <div
        className={`${layoutStyle.layout} ${headerStyle.layout} ${mainStyle.layout}`}
      >
        <figure className={headerStyle.logo__wrap}>
          <img src="./assets/images/logo.svg" alt="" />
        </figure>
        <button
          type="button"
          className={headerStyle.menu__btn}
          onClick={() => setIsOpenModal(true)}
        ></button>

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
