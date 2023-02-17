/*eslint-disable*/
import React, { useEffect, useRef, useState } from "react";

// reactstrap components
import styles from "./darkFooter.module.css";


function DarkFooter({ tags }) {


  const mounted = useRef();
  const [firstRowTags, setFirstRowTags] = useState(null);
  const [secondRowTags, setSecondRowTags] = useState(null);
  const [thirdRowTags, setThirdRowTags] = useState(null);


  useEffect(() => {

    setFirstRowTags(tags ? tags.slice(0, 4) : null)
    setSecondRowTags(tags ? tags.slice(4, 7) : null)
    setThirdRowTags(tags ? tags.slice(7, 11) : null)

  }, [tags]);

  return (
    <footer id="footer" className={`footer ${styles['custom-footer']}`} >
      {firstRowTags || secondRowTags || thirdRowTags
        ? (
          <nav className={styles['custom-nav']}>
            <ul className={styles['custom-ul']}>
              {firstRowTags.map((tag, index) => (
                <li className={styles['custom-li']} key={index}>
                  {/* <Link
                    key={index}
                    to={`/index/${tag._id}`}
                    target="_blank"
                  > */}
                  <div>
                    # {tag.name}
                  </div>
                  {/* </Link> */}
                </li>
              ))}
            </ul>
            <ul className={styles['custom-ul']}>
              {secondRowTags.map((tag, index) => (
                <li className={styles['custom-li']} key={index}>
                  {/* <Link
                    key={index}
                    to={`/index/${tag._id}`}
                    target="_blank"
                  > */}
                  <div>
                    # {tag.name}
                  </div>
                  {/* </Link> */}
                </li>
              ))}
            </ul>
            <ul className={styles['custom-ul']}>
              {thirdRowTags.map((tag, index) => (
                <li className={styles['custom-li']} key={index}>
                  {/* <Link
                    key={index}
                    to={`/index/${tag._id}`}
                    target="_blank"
                  > */}
                  <div>
                    # {tag.name}
                  </div>
                  {/* </Link> */}
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
