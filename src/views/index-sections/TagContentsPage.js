import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
// core components

// import styles from './contentPage.module.css';
import IndexDecorationImage from './IndexDecorationImage';

import { useOutletContext } from 'react-router-dom';
import { getTitleContentsByTag } from 'assets/js/titleContents';
import styles from './tagContentPage.module.css';
import ContentPageRight from './ContentPageRight';

import ConnectContent from './ConnectContent';
import useScrollToTop from 'components/hook/useScrollToTop';

const item0 = {
  src: require('assets/img/bg1.png'),
  altText: 'Nature, United States',
};
const item1 = {
  src: require('assets/img/news_image.png'),
  altText: 'Nature, United States',
};

function TagContentsPage() {
  useScrollToTop();
  const { tags } = useOutletContext();

  const [titleContents, setTitleContents] = useState(null);
  console.log("🚀 ~ file: TagContentsPage.js:32 ~ TagContentsPage ~ titleContents:", titleContents)


  const { tagName } = useParams();

  useEffect(() => {
    getTitleContentsByTag(tagName)
      .then((titleContents) => {
        console.log("🚀 ~ file: TagContentsPage.js:40 ~ .then ~ titleContents:", titleContents)
        setTitleContents(titleContents);
      });
  }, [tagName]);



  return (
    <>
      <div className={`section ${styles.section}`} >
        <img
          src={item0.src}
          alt={item0.altText}
        />
      </div>
      <IndexDecorationImage imageType={'cut'} />
      <div className={styles['content-page']}>
        <div className={styles['left-content']}>
          <div
            className={`${styles['main-content']} ${styles['connect-connect']}`}
          >
            <h2>#&nbsp;&nbsp;{tagName}</h2>
            {titleContents.length > 0 ? (
              <div className={`${styles['content-section']}`}>
                {titleContents.map((content, index) =>
                  <ConnectContent key={index} index={index} content={content} item1={item1} />
                )}
              </div>
            ) : <div className={`${styles['content-section']} ${styles.empty}`}>Empty...</div>
            }
          </div>
        </div>
        {tags && <ContentPageRight tags={tags} />}
      </div>
    </>
  );
}

export default TagContentsPage;
