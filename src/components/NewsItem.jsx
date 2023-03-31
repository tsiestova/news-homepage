import React from "react";
import newsItemStyle from "./news-item.module.scss";

const NewsItem = ({ title, content }) => {
  return (
    <li className={newsItemStyle.news__item}>
      <a href="">
        <div className={newsItemStyle.item__heading}>{title}</div>
        <div className={newsItemStyle.item__content}>{content}</div>
      </a>
    </li>
  );
};

export default NewsItem;
