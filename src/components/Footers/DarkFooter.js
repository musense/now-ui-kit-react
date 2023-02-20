/*eslint-disable*/
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Tag from "views/index-sections/Tag";

// reactstrap components
import styles from "./darkFooter.module.css";


function DarkFooter({ tags }) {

  const location = useLocation()
  const [firstRowTags, setFirstRowTags] = useState(null);
  const [secondRowTags, setSecondRowTags] = useState(null);
  const [thirdRowTags, setThirdRowTags] = useState(null);

  const [marginClassName, setMarginClassName] = useState("");
  const getMarginCSS = () => useMemo(() => {
    if (location.pathname === "/") {
      setMarginClassName("index-margin")
    } else if (location.pathname.indexOf('/content/tag') !== -1) {
      setMarginClassName("tag-margin")
    } else {
      setMarginClassName("content-margin")
    }
  }, [location.key])

  getMarginCSS()

  const setTagRows = (start = 0, end = arr.length, arr = []) => {
    if (arr === null) return
    if (arr.length === 0) return
    return arr.slice(start, end)
  }

  useEffect(() => {
    setFirstRowTags(setTagRows(0, 4, tags))
    setSecondRowTags(setTagRows(4, 7, tags))
    setThirdRowTags(setTagRows(7, 11, tags))
  }, [tags]);

  return (
    <footer id="footer" className={`footer ${styles['custom-footer']} ${styles[marginClassName]}`} >
      {firstRowTags || secondRowTags || thirdRowTags
        ? (
          <nav className={styles['custom-nav']}>
            <ul className={styles['custom-ul']}>
              {firstRowTags.map((tag, index) => (
                <li className={styles['custom-li']} key={index}>
                  <Tag index={index} tagName={tag.name} />
                </li>
              ))}
            </ul>
            <ul className={styles['custom-ul']}>
              {secondRowTags.map((tag, index) => (
                <li className={styles['custom-li']} key={index}>
                  <Tag index={index} tagName={tag.name} />
                </li>
              ))}
            </ul>
            <ul className={styles['custom-ul']}>
              {thirdRowTags.map((tag, index) => (
                <li className={styles['custom-li']} key={index}>
                  <Tag index={index} tagName={tag.name} />
                </li>
              ))}
            </ul>
          </nav>
        )
        : null
      }
    </footer>
  );
}

export default DarkFooter;
