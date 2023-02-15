import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from './newTitle.module.css'
import TitleImage from "./TitleImage";



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

function NewTitles({ contents }) {
  // console.log(`TITLE_CONTENTS: ${TITLE_CONTENTS}`)

  const [newContents, setNewContents] = useState(null);
  const [hotContents, setHotContents] = useState(null);

  const navigate = useNavigate()
  const mounted = useRef();
  const sortByAndReturn = (arr = [], key = null) => {
    // console.log(arr);

    if (key === null) return arr
    if (key && typeof key === 'string' && key.toLowerCase().indexOf('date') !== -1) {
      return [...arr].sort((a1, a2) => new Date(a2[key]) - new Date(a1[key]))
    }
    return [...arr].sort((a1, a2) => a2[key] - a1[key])
  }

  useEffect(() => {
    // console.group('NewTitle');
    // console.log(contents);
    // console.groupEnd('NewTitle');
    if (!mounted.current) {
      mounted.current = true;
      setNewContents(sortByAndReturn(contents, 'updatedAt'))
      setHotContents(sortByAndReturn(contents, 'thumbUp'))


    } else {

    }
  }, [mounted]);

  function goToContent(content) {
    if (content === null) return
    navigate(`/content/${content._id}`)
  }
  return (
    newContents && hotContents
      ? (<>
        <div className={`${styles['section-basic']}`}>

          <div className={`${styles['news-titles']} ${styles['content-container']}`}>
            <TitleImage type="news" title={'ニュース'} />
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
            <TitleImage type="hot" title={'ホット'} />
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
