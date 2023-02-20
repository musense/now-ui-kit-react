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

const item0 = {
  src: require('assets/img/bg1.jpg'),
  altText: 'Nature, United States',
};
const item1 = {
  src: require('assets/img/news_image.png'),
  altText: 'Nature, United States',
};

function TagContentsPage() {
  const { tags } = useOutletContext();

  const [titleContents, setTitleContents] = useState(null);


  const { tagName } = useParams();

  useEffect(() => {
    getTitleContentsByTag(tagName)
      .then((titleContents) => {
        setTitleContents(titleContents);
      });
  }, [tagName]);



  return (
    <div className={`section ${styles.section}`}>
      <Container>
        <Row className='justify-content-center'>
          <img
            src={item0.src}
            alt={item0.altText}
          />
        </Row>
      </Container>
      <IndexDecorationImage imageType={'cut'} />
      <div className={styles['content-page']}>
        <div className={styles['left-content']}>
          <div
            className={`${styles['main-content']} ${styles['connect-connect']}`}
          >
            <h2>#&nbsp;&nbsp;{tagName}</h2>
            {titleContents ? (
              <div className={`${styles['content-section']}`}>
                {titleContents.map((content, index) =>
                  <ConnectContent index={index} content={content} item1={item1} />
                )}
              </div>
            ) : null}
          </div>
        </div>
        {tags ? <ContentPageRight tags={tags} /> : null}
      </div>
    </div>
  );
}

export default TagContentsPage;
