import React from "react";
import styles from './newTitle.module.css'
import NavigateContainer from "./NavigateContainer";

function NewsContent({ index, content }) {
    return (
        <NavigateContainer
            index={index}
            contentID={content._id}>
            <div className={styles['title-mainImage']} />

            <div className={styles['title-wrapper']}>
                <div className={`${styles.title}`} key={index + 'divTitleNew'}>
                    {content.title}
                </div>
                <div
                    className={`${styles.content}`}
                    dangerouslySetInnerHTML={{ __html: content.content }} />
                <div className={styles['title-more']} />
            </div>
        </NavigateContainer>
    );
}

export default NewsContent;