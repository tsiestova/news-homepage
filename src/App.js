import "./App.css";
import Header from "./components/Header";
import TopBox from "./components/TopBox";
import NewsContainer from "./components/NewsContainer";
import ArticleContainer from "./components/ArticleContainer";
import mainStyles from "./components/main.module.scss";
import { useState, createContext, useRef, useEffect } from "react";
import ModalComponent from "./components/ModalComponent";
export const ModalContext = createContext(null);

function App() {
  const appRef = useRef();
  const modalContentRef = useRef(null);

  const [isOpenModal, setIsOpenModal] = useState("none");

  const dataContext = {
    isOpenModal,
    setIsOpenModal,
  };

  const handleClick = (e) => {
    const closeCondition =
      isOpenModal === "visible" &&
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target) &&
      e.target.type !== "button";

    if (closeCondition) {
      setIsOpenModal("invisible");
    }
  };

  window.document.addEventListener("click", (e) => {
    handleClick(e);
  });

  return (
    <div className="App">
      <ModalContext.Provider value={dataContext}>
        <div className={mainStyles.page__wrap} ref={appRef}>
          <Header />
          <div className={mainStyles.section__wrap}>
            <TopBox />
            <NewsContainer />
          </div>
          <ArticleContainer />
        </div>
        <ModalComponent forwardRef={modalContentRef} />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
