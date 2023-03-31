import React from "react";
import articleItemStyle from "./article-item.module.scss";

const ArticleItem = ({ pic, title, content }) => {
  return (
    <li className={articleItemStyle.article__item}>
      <a href="">
        <figure className={articleItemStyle.pic__wrap}>
          <img src={pic} alt="" />
        </figure>
        <div className={articleItemStyle.content__wrap}>
          <div className={articleItemStyle.item__heading}>{title}</div>
          <div className={articleItemStyle.item__content}>{content}</div>
        </div>
      </a>
    </li>
  );
};

export default ArticleItem;
