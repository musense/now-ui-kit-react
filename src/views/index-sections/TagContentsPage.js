import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
// core components

import styles from './contentPage.module.css';
import IndexDecorationImage from './IndexDecorationImage';
import TitleImage from './TitleImage';

import { useOutletContext } from 'react-router-dom';
import ContentPageTags from './ContentPageTags';
import { getTitleContentsByTag } from 'assets/js/titleContents';

const item0 = {
  src: require('assets/img/bg1.jpg'),
  altText: 'Nature, United States',
};

function TagContentsPage() {
  const { contents, tags } = useOutletContext();

  const [titleContents, setTitleContents] = useState(null);

  const navigate = useNavigate();
  const { tag } = useParams();


  useEffect(() => {
    getTitleContentsByTag(tag)
      .then(titleContents => {
        console.log("🚀 ~ file: TagContentsPage.js:32 ~ useEffect ~ titleContents", titleContents)
        setTitleContents(titleContents)
      })
  }, [tag]);

  function goToContent(content) {
    if (content === null) return;
    navigate(`/content/${content._id}`);
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
          <h2>#&nbsp;&nbsp;{tag}</h2>
          {titleContents
            ? <div className={`${styles['content-section']}`}>
              {
                titleContents.map((content, index) => {
                  if (index >= 4) return
                  return (
                    <div
                      className={styles['title-container']}
                      key={index + 'divConNew'}
                      onClick={() => goToContent(content)}
                    >
                      <div className={styles['title-mainImage']} />

                      <div className={styles['title-wrapper']}>
                        <div className={`${styles.title}`} key={index + 'divTitleNew'}>
                          {/* <Link to={`/content/${content._id}`}>{content.title}</Link> */}
                          {content.title}
                        </div>
                        <div
                          className={`${styles.content}`}
                          dangerouslySetInnerHTML={{ __html: content.content }} />
                        <div className={styles['title-more']} />
                      </div>

                    </div>
                  )
                })
              }
            </div>
            : null}
          <div className={styles['right-content']}>
            <div className={styles['trend-tags']}>
              <TitleImage
                type='trend'
                showLogo={false}
                title={'トレンド'}
              />
              <div className={styles['trend-tags-flex-site']}>
                {tags ? <ContentPageTags tags={tags} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TagContentsPage;
