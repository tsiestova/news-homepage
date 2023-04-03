import React, { useContext, useRef } from "react";
import modalStyle from "./modal-window.module.scss";
import { ModalContext } from "../App";
import ReactDom from "react-dom";

const ModalComponent = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);

  if (!isOpenModal) return null;

  return ReactDom.createPortal(
    <div className={modalStyle.modal__wrap}>
      <div className={modalStyle.modal__window}>
        <button
          type="button"
          className={modalStyle.btn__close}
          onClick={() => setIsOpenModal(false)}
        ></button>
        <nav className={modalStyle.nav__menu}>
          <a href="#" className={modalStyle.nav__menu__item}>
            Home
          </a>
          <a href="#" className={modalStyle.nav__menu__item}>
            New
          </a>
          <a href="#" className={modalStyle.nav__menu__item}>
            Popular
          </a>
          <a href="#" className={modalStyle.nav__menu__item}>
            Trending
          </a>
          <a href="#" className={modalStyle.nav__menu__item}>
            Categories
          </a>
        </nav>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalComponent;
