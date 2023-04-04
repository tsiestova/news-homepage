import "./App.css";
import headerStyle from "./components/header.module.scss";
import Header from "./components/Header";
import TopBox from "./components/TopBox";
import NewsContainer from "./components/NewsContainer";
import ArticleContainer from "./components/ArticleContainer";
import mainStyles from "./components/main.module.scss";
import { useState, createContext, useReducer, useRef, useEffect } from "react";
import ModalComponent from "./components/ModalComponent";
export const ModalContext = createContext(null);

function App() {
  const appRef = useRef();
  const headerRef = useRef(null);
  const modalRef = useRef(null);

  const [isOpenModal, setIsOpenModal] = useState(false);

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

  const dataContext = {
    isOpenModal,
    setIsOpenModal,
  };

  const handleMouseDown = (e) => {
    if (appRef.current.contains(e.target)) {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    isOpenModal
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");

    if (modalRef.current) {
      modalRef.current.classList.add("show__modal");
    }
  }, [isOpenModal]);

  return (
    <div className="App">
      <ModalContext.Provider value={dataContext}>
        <div
          className={mainStyles.page__wrap}
          ref={appRef}
          onMouseDown={(e) => handleMouseDown(e)}
        >
          <Header forwardRef={headerRef} />
          <div className={mainStyles.section__wrap}>
            <TopBox />
            <NewsContainer />
          </div>
          <ArticleContainer />
        </div>
        <ModalComponent forwardRef={modalRef} />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
