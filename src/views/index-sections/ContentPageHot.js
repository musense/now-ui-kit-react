import React from "react";
import styles from "./contentPage.module.css";


function ContentPageHot({ contents, goToContent }) {
    return (contents.map((content, index) => {
        if (index >= 5) return;

        return (
            <div
                className={styles['title-container']}
                key={index + 'divConHot'}
                onClick={() => goToContent(content._id)}
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
    }));
}

export default ContentPageHot;