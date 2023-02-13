import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// react plugin used to create switch buttons
// import Switch from "react-bootstrap-switch";
// plugin that creates slider
// import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import styles from './newTitle.module.css'
import { getTitleContents } from "./../../assets/js/titleContents";
import TitleImage from "./TitleImage";

// core components



const ranking = new Map([
  [0, '1st'],
  [1, '2nd'],
  [2, '3rd'],
  [3, '4th'],
  [4, '5th'],
  [5, '6th'],
  [6, '7th'],
  [7, '8th'],
  [8, '9th'],
  [9, '10th'],
])

function NewTitles() {
  // console.log(`TITLE_CONTENTS: ${TITLE_CONTENTS}`)

  const [isResolved, setIsResolved] = useState(false);
  const [_titleContents_, setTitleContents] = useState(null);
  const [newContents, setNewContents] = useState(null);
  const [hotContents, setHotContents] = useState(null);

  const navigate = useNavigate()
  const mounted = useRef();
  const sortByAndReturn = (arr = [], key = null) => {
    console.log(arr);

    if (key === null) return arr
    if (key && typeof key === 'string' && key.toLowerCase().indexOf('date') !== -1) {
      return [...arr].sort((a1, a2) => new Date(a2[key]) - new Date(a1[key]))
    }
    return [...arr].sort((a1, a2) => a2[key] - a1[key])
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      console.log(`isResolved: ${isResolved}`)
      getTitleContents()
        .then((titleContents) => {
          setIsResolved(true);
          setTitleContents(titleContents)
          setNewContents(sortByAndReturn(titleContents, 'updatedAt'))
          setHotContents(sortByAndReturn(titleContents, 'thumbUp'))
        })
      // if (isResolved) {

      // }
      // console.group('NEW_CONTENTS')
      // NEW_CONTENTS.map((content, index) => {
      //   console.log(content)
      //   console.log(index)
      // })
      // console.groupEnd('NEW_CONTENTS')
      // console.group('HOT_CONTENTS')
      // HOT_CONTENTS.map((content, index) => {
      //   console.log(content)
      //   console.log(index)
      // })
      // console.groupEnd('HOT_CONTENTS')
    }
  }, [mounted, isResolved]);

  function goToContent(content) {
    if (content === null) return
    navigate(`/content/${content._id}`)
  }
  return (
    newContents && hotContents
      ? (<>
        <div className={`${styles['section-basic']}`}>

          <div className={`${styles['news-titles']} ${styles['content-container']}`}>
            <TitleImage logo="news" title={'ニュース'} />
            <div className={`${styles['content-section']}`}>
              {
                newContents.map((content, index) => {
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
          </div>

          <div className={`${styles['hot-titles']} ${styles['content-container']}`}>
            <TitleImage logo="hot" title={'ホット'} />
            <div className={`${styles['content-section']}`}>
              {
                newContents.map((content, index) => {
                  if (index >= 5) return

                  return (
                    <div
                      className={styles['title-container']}
                      key={index + 'divConHot'}
                      onClick={() => goToContent(content)}
                    >
                      <div className={styles['title-mainImage']} />

                      <div className={styles['title-wrapper']}>
                        <div className={`${styles.title}`} key={index + 'divTitleHot'}>
                          <span className={`${styles.ranking}`}>{ranking.get(index)}</span>
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
          </div>

        </div>
      </>)
      : null
  );
}

export default NewTitles;
