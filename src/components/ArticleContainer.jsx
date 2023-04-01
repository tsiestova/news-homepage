import React from "react";
import layoutStyle from "./layout.module.scss";
import articleBoxStyle from "./article-container.module.scss";
import ArticleItem from "./ArticleItem";
import mainStyle from "./main.module.scss";

const ArticleContainer = () => {
  return (
    <div>
      <div className={`${layoutStyle.layout} ${mainStyle.layout}`}>
        <ul className={articleBoxStyle.article__list}>
          <ArticleItem
            pic="../assets/images/image-retro-pcs.jpg"
            title="Reviving Retro PCs"
            content="What happens when old PCs are given modern upgrades?"
          />
          <ArticleItem
            pic="../assets/images/image-top-laptops.jpg"
            title="Top 10 Laptops of 2022"
            content="Our best picks for various needs and budgets."
          />
          <ArticleItem
            pic="../assets/images/image-gaming-growth.jpg"
            title="The Growth of Gaming"
            content="How the pandemic has sparked fresh opportunities."
          />
        </ul>
      </div>
    </div>
  );
};

export default ArticleContainer;
