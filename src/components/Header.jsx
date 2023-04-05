import React, { useContext, useRef, useEffect } from "react";
import headerStyle from "./header.module.scss";
import layoutStyle from "./layout.module.scss";
import mainStyle from "./main.module.scss";
import { ModalContext } from "../App";
import logo from "../assets/logo.svg";

const Header = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);
  const headerRef = useRef();

  const scrollHandler = () => {
    const scrollCondition =
      document.documentElement.scrollTop > 10 || document.body.scrollTop > 10;

    if (scrollCondition) {
      headerRef.current.classList.add("header__active");
    } else {
      headerRef.current.classList.remove("header__active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      className={headerStyle.header}
      id={headerStyle.header}
      ref={headerRef}
    >
      <div
        className={`${layoutStyle.layout} ${headerStyle.layout} ${mainStyle.layout}`}
      >
        <figure className={headerStyle.logo__wrap}>
          <img src={logo} alt="" />
        </figure>
        <button
          type="button"
          className={headerStyle.menu__btn}
          onClick={() => setIsOpenModal("created")}
        ></button>

        <div className={headerStyle.nav__menu__wrap}>
          <nav className={headerStyle.nav__menu}>
            <a href="#" className={headerStyle.nav__menu__item}>
              Home
            </a>
            <a href="#" className={headerStyle.nav__menu__item}>
              New
            </a>
            <a href="#" className={headerStyle.nav__menu__item}>
              Popular
            </a>
            <a href="#" className={headerStyle.nav__menu__item}>
              Trending
            </a>
            <a href="#" className={headerStyle.nav__menu__item}>
              Categories
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
