import React from "react";
import TopBoxStyle from "./top-box.module.scss";
import TopBoxPic from "../assets/image-web-3-mobile.jpg";
import layoutStyle from "./layout.module.scss";

const TopBox = () => {
  return (
    <div className={TopBoxStyle.top__container}>
      <div className={`${layoutStyle.layout} ${TopBoxStyle.layout}`}>
        <figure className={TopBoxStyle.top__container__pic}>
          <img src={TopBoxPic} alt="" />
        </figure>
        <div className={TopBoxStyle.content__wrap}>
          <h1 className={TopBoxStyle.heading}>The Bright Future of Web 3.0?</h1>
          <div className={TopBoxStyle.text__wrap}>
            <div className={TopBoxStyle.content}>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </div>
            <a href="" className={TopBoxStyle.btn}>
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBox;
