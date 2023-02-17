import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
// core components

import styles from './contentPage.module.css';
import IndexDecorationImage from './IndexDecorationImage';
import TitleImage from './TitleImage';

import { useOutletContext } from 'react-router-dom';
import ContentPageLeft from './ContentPageLeft';
import ContentPageHot from './ContentPageHot';
import ContentPageTags from './ContentPageTags';
import ContentPageConnect from './ContentPageConnect';

const item0 = {
  src: require('assets/img/bg1.jpg'),
  altText: 'Nature, United States',
};

function ContentPage() {
  const { contents, tags } = useOutletContext();
  const [_titleContents_, setTitleContents] = useState(null);
  const [_theContent_, setTheContent] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const findOneById = (arr = [], id = null) => {
    if (id === null || typeof id !== 'string') return null;
    return [...arr].find((a) => a._id === id);
  };

  useEffect(() => {
    if (contents !== null) {
      const theContent = findOneById(contents, id);
      console.log(contents);
      setTitleContents(contents);
      setTheContent(theContent);
    } else {
      navigate('/');
    }
  }, [id]);

  function goToContent(content) {
    if (content === null) return;
    navigate(`/content/${content._id}`);
  }

  function goToContentsByTag(tag) {

    navigate(`/content/tag/${tag}`)
  }

  return (
    <>
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
          {_theContent_ ? <ContentPageLeft content={_theContent_} /> : null}
          <div className={styles['right-content']}>
            {/* <div className={styles['hot-content']}>
              <TitleImage
                type='hot'
                showLogo={false}
                title={'ホット'}
              />
              <div className={`${styles['content-btn']} ${styles['hot-btn']}`}>
                <div className={`${styles.btn} ${styles['day-btn']}`}></div>
                <div className={`${styles.btn} ${styles['week-btn']}`}></div>
                <div className={`${styles.btn} ${styles['month-btn']}`}></div>
              </div>
              <div className={`${styles['content-section']}`}>
                {_titleContents_ ? (
                  <ContentPageHot
                    contents={_titleContents_}
                    goToContent={goToContent}
                  />
                ) : null}
              </div>
            </div> */}
            <div className={styles['trend-tags']}>
              <TitleImage
                type='trend'
                showLogo={false}
                title={'トレンド'}
              />
              <div className={styles['trend-tags-flex-site']}>
                {tags ? <ContentPageTags tags={tags} goToContentsByTag={goToContentsByTag} /> : null}
              </div>
            </div>
          </div>
        </div>
        <IndexDecorationImage imageType={'connect'} />
        <div className={styles['connect-flex-site']}>
          {_titleContents_ ? (
            <ContentPageConnect
              contents={_titleContents_}
              goToContent={goToContent}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ContentPage;
