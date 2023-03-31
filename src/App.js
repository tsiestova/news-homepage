import "./App.css";
import Header from "./components/Header";
import TopBox from "./components/TopBox";
import NewsContainer from "./components/NewsContainer";
import ArticleContainer from "./components/ArticleContainer";
import mainStyles from "./components/main.module.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={mainStyles.section__wrap}>
        <TopBox />
        <NewsContainer />
      </div>
      <ArticleContainer />
    </div>
  );
}

export default App;
