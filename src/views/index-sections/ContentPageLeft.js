import React, { useEffect, useState } from "react";
import styles from "./contentPage.module.css";
import Tag from "./Tag";

const dateOption = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const timeOption = {
  hour: '2-digit',
  hour12: false,
  hourCycle: 'h24',
  minute: '2-digit',
};

const item = {
  src: require('assets/img/content_image.png'),
  altText: 'Content Image',
};

function ContentPageLeft({ content, prevID, nextID, goToContent }) {


  return (<div className={styles['left-content']}>
    <div className={styles['main-content']}>
      <div className={styles['title-view']}>
        <div className={styles['main-title-decoration']}></div>
        <h1 className={styles['main-title']}>{content.title}</h1>
      </div>
      <img
        className={styles['title-main-image']}
        src={item.src}
        alt={item.altText}
      />
      <div
        className={styles['title-main-content']}
        dangerouslySetInnerHTML={{ __html: content.content }}
      />

      <div className={styles['title-main-date']}>
        <span className={styles['create-date']}>
          {new Date(content.createdAt).toLocaleDateString(
            undefined,
            dateOption
          )}
          &nbsp; &nbsp;
          {new Date(content.createdAt).toLocaleTimeString(
            undefined,
            timeOption
          )}
        </span>
      </div>
    </div>
    <div className={styles['learn-more']}>
      <span>Learn more about the game</span>
      <div className={styles['learn-more-box']}>
        <span className={styles['learn-more-link']}>
          What are nba betting tips? 3 tips to make betting more
          profitable.
        </span>
        <span className={styles['learn-more-link']}>
          Guide to betting on basketball games : Free NBA betting
          tips.
        </span>
        <span className={styles['learn-more-link']}>
          Expert in NBA betting tips : 3 Pro-analysis make you bet
          smarter.
        </span>
      </div>
    </div>
    <div className={styles['content-tags']}>
      {content.tags.map((tagName, index) =>
        <Tag key={index} tagName={tagName} />
      )}
    </div>
    <div className={styles['content-btn']}>
      <div onClick={() => goToContent(prevID)} className={`${styles.btn} ${styles['prev-btn']}`}></div>
      <div onClick={() => goToContent(nextID)} className={`${styles.btn} ${styles['next-btn']}`}></div>
    </div>
  </div>);
}

export default ContentPageLeft;