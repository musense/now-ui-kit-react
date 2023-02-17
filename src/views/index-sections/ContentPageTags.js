import React from "react";
import styles from "./contentPage.module.css";


function ContentPageTags({ tags, goToContentsByTag }) {


    return (tags.map((tag, index) => (
        <div
            onClick={() => goToContentsByTag(tag)}
            key={index}
            className={styles['trend-tags-flex-tags']}
        >
            #&nbsp;&nbsp;{tag.name}
        </div>
    )));
}

export default ContentPageTags;