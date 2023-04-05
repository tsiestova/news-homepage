import React, { useContext, useEffect, useRef } from "react";
import modalStyle from "./modal-window.module.scss";
import { ModalContext } from "../App";
import ReactDom from "react-dom";

const ModalComponent = ({ forwardRef }) => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);

  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpenModal === "invisible") {
    }
    if (isOpenModal === "created") {
      setIsOpenModal("visible");
    }
  }, [isOpenModal]);

  useEffect(() => {
    let timeOutId;

    const handleTransitionEnd = () => {
      isOpenModal === "invisible" && setIsOpenModal("none");
      clearTimeout(timeOutId);
    };

    if (modalRef.current) {
      modalRef.current.addEventListener("transitionend", handleTransitionEnd);
      timeOutId = setTimeout(handleTransitionEnd, 2 * 1000 * 1.5);
    }

    return () => {
      if (!modalRef.current) {
        return;
      }

      clearTimeout(timeOutId);
      modalRef.current.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [modalRef.current, isOpenModal]);

  if (isOpenModal === "none") return null;

  return ReactDom.createPortal(
    <div
      className={`${modalStyle.modal__wrap} ${
        isOpenModal === "visible" && modalStyle.active
      }`}
      ref={modalRef}
    >
      <div
        className={`${modalStyle.modal__window} ${
          isOpenModal === "visible" && modalStyle.active
        }`}
        ref={forwardRef}
      >
        <button
          type="button"
          className={modalStyle.btn__close}
          onClick={() => setIsOpenModal("invisible")}
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
