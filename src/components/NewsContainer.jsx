import React from "react";
import newsContainerStyles from "./news-container.module.scss";
import layoutStyle from "./layout.module.scss";
import NewsItem from "./NewsItem";
import newsItemStyle from "./news-item.module.scss";

const NewsContainer = () => {
  return (
    <div className={newsContainerStyles.news__container__wrap}>
      <div className={`${layoutStyle.layout} ${newsContainerStyles.layout}`}>
        <div className={newsContainerStyles.news__container}>
          <h1 className={newsContainerStyles.heading}>New</h1>
          <ul className={newsContainerStyles.news__list}>
            <NewsItem
              title="Hydrogen VS Electric Cars"
              content="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <NewsItem
              title="The Downsides of AI Artistry"
              content="What are the possible adverse effects of on-demand AI image generation?"
            />
            <NewsItem
              title="Is VC Funding Drying Up?"
              content="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
