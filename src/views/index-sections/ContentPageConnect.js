import React from "react";
import styles from "./contentPage.module.css";

function ContentPageConnect({ contents, goToContent }) {
    return (contents.map((content, index) => {
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
                <div className={styles['connect-title']}>
                    {content.title}
                </div>
            </div>
        );
    }));
}

export default ContentPageConnect;