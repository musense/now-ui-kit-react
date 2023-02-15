import React from "react";
import styles from "./contentPage.module.css";


function ContentPageTags({ tags }) {
    return (tags.map((tag, index) => (
        <div
            key={index}
            className={styles['trend-tags-flex-tags']}
        >
            #&nbsp;&nbsp;{tag.name}
        </div>
    )));
}

export default ContentPageTags;