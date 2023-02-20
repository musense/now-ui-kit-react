import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
// core components

import styles from './contentPage.module.css';
import IndexDecorationImage from './IndexDecorationImage';

import { useOutletContext } from 'react-router-dom';
import ContentPageLeft from './ContentPageLeft';
import ContentPageConnect from './ContentPageConnect';
import ContentPageRight from './ContentPageRight';

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
          { tags ? <ContentPageRight tags={tags}  /> : null }
        </div>
        <IndexDecorationImage imageType={'connect'} />

        <div className={styles['connect-flex-site']}>
          {_titleContents_ ? (
            <ContentPageConnect
              contents={_titleContents_}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ContentPage;
