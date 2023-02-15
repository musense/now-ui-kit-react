import React, { useEffect, useRef, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
// core components

import styles from './contentPage.module.css';
import IndexDecorationImage from './IndexDecorationImage';
import TitleImage from './TitleImage';

import { useOutletContext } from 'react-router-dom';

const item0 = {
  src: require('assets/img/bg1.jpg'),
  altText: 'Nature, United States',
};

const item = {
  src: require('assets/img/content_image.png'),
  altText: 'Content Image',
};

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

function ContentPage() {
  // console.log(`TITLE_CONTENTS: ${TITLE_CONTENTS}`)

  const { contents, tags } = useOutletContext();

  const [_connectContents_, setConnectContents] = useState(null);
  const [_theContent_, setTheContent] = useState(null);

  const mounted = useRef();

  const navigate = useNavigate();
  const { id } = useParams();

  const findOneById = (arr = [], id = null) => {
    if (id === null || typeof id !== 'string') return null;
    return [...arr].find((a) => a._id === id);
  };

  useEffect(() => {
    console.log(
      '🚀 ~ file: ContentPage.js:55 ~ ContentPage ~ contents',
      contents
    );
    if (contents !== null) {
      const theContent = findOneById(contents, id);
      console.log(contents);

      setConnectContents(contents);

      setTheContent(theContent);
    } else {
      navigate('/');
    }
  }, [id]);

  function goToContent(content) {
    if (content === null) return;
    navigate(`/content/${content._id}`);
  }

  return (
    <>
      {_theContent_ ? (
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
              <div className={styles['main-content']}>
                <div className={styles['title-view']}>
                  <div className={styles['main-title-decoration']}></div>
                  <h1 className={styles['main-title']}>{_theContent_.title}</h1>
                </div>
                <img
                  className={styles['title-main-image']}
                  src={item.src}
                  alt={item.altText}
                />
                <div
                  className={styles['title-main-content']}
                  dangerouslySetInnerHTML={{ __html: _theContent_.content }}
                />

                <div className='title-main-date'>
                  <span className={styles['create-date']}>
                    {new Date(_theContent_.createdAt).toLocaleDateString(
                      undefined,
                      dateOption
                    )}
                    &nbsp; &nbsp;
                    {new Date(_theContent_.createdAt).toLocaleTimeString(
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
                {_theContent_.tags.map((tag, index) => {
                  return <span key={index}>#&nbsp;{tag}</span>;
                })}
              </div>
              <div className={styles['content-btn']}>
                <div className={`${styles.btn} ${styles['prev-btn']}`}></div>
                <div className={`${styles.btn} ${styles['next-btn']}`}></div>
              </div>
            </div>
            <div className={styles['right-content']}>
              <div className={styles['hot-content']}>
                <TitleImage
                  type='hot'
                  showLogo={false}
                  title={'ホット'}
                />
                <div
                  className={`${styles['content-btn']} ${styles['hot-btn']}`}
                >
                  <div className={`${styles.btn} ${styles['day-btn']}`}></div>
                  <div className={`${styles.btn} ${styles['week-btn']}`}></div>
                  <div className={`${styles.btn} ${styles['month-btn']}`}></div>
                </div>
                <div className={`${styles['content-section']}`}>
                  {_connectContents_.map((content, index) => {
                    if (index >= 5) return;

                    return (
                      <div
                        className={styles['title-container']}
                        key={index + 'divConHot'}
                        onClick={() => goToContent(content)}
                      >
                        <div className={styles['title-mainImage']} />

                        {/* <div className={styles['title-wrapper']}> */}
                        <div
                          className={`${styles.title}`}
                          key={index + 'divTitleHot'}
                        >
                          {content.title}
                        </div>
                        {/* </div> */}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles['trend-tags']}>
                <TitleImage
                  type='trend'
                  showLogo={false}
                  title={'トレンド'}
                />
                <div className={styles['trend-tags-flex-site']}>
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className={styles['trend-tags-flex-tags']}
                    >
                      #&nbsp;&nbsp;{tag.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <IndexDecorationImage imageType={'connect'} />
          <div className={styles['connect-flex-site']}>
            {_connectContents_.map((content, index) => {
              if (index > 3) return;

              return (
                <div
                  key={index}
                  onClick={() => goToContent(content)}
                  className={styles['connect-flex-box']}
                >
                  <div className={styles['connect-image']}>
                    {/* <img src={content.src} alt={content.altText} /> */}
                  </div>
                  <div className={styles['connect-title']}>{content.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ContentPage;
