import React from "react";
import layoutStyle from "./layout.module.scss";
import articleBoxStyle from "./article-container.module.scss";
import ArticleItem from "./ArticleItem";
import ArticlePic1 from "../assets/image-retro-pcs.jpg";
import ArticlePic2 from "../assets/image-top-laptops.jpg";
import ArticlePic3 from "../assets/image-gaming-growth.jpg";
import mainStyle from "./main.module.scss";

const ArticleContainer = () => {
  return (
    <div className={articleBoxStyle.article__container__wrap}>
      <div className={`${layoutStyle.layout} ${mainStyle.layout}`}>
        <ul className={articleBoxStyle.article__list}>
          <ArticleItem
            pic={ArticlePic1}
            title="Reviving Retro PCs"
            content="What happens when old PCs are given modern upgrades?"
          />
          <ArticleItem
            pic={ArticlePic2}
            title="Top 10 Laptops of 2022"
            content="Our best picks for various needs and budgets."
          />
          <ArticleItem
            pic={ArticlePic3}
            title="The Growth of Gaming"
            content="How the pandemic has sparked fresh opportunities."
          />
        </ul>
      </div>
    </div>
  );
};

export default ArticleContainer;
