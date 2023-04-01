import "./App.css";
import Header from "./components/Header";
import TopBox from "./components/TopBox";
import NewsContainer from "./components/NewsContainer";
import ArticleContainer from "./components/ArticleContainer";
import mainStyles from "./components/main.module.scss";
import { useState, createContext, useReducer, useRef } from "react";
import ModalComponent from "./components/ModalComponent";
export const ModalContext = createContext(null);

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dataContext = {
    isOpenModal,
    setIsOpenModal,
  };
  const appRef = useRef();

  const handleMouseDown = (e) => {
    if (appRef.current.contains(e.target)) {
      setIsOpenModal(false);
    }
  };

  return (
    <div className="App">
      <ModalContext.Provider value={dataContext}>
        <div
          className={mainStyles.page__wrap}
          ref={appRef}
          onMouseDown={(e) => handleMouseDown(e)}
        >
          <Header />
          <div className={mainStyles.section__wrap}>
            <TopBox />
            <NewsContainer />
          </div>
          <ArticleContainer />
        </div>
        <ModalComponent />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
