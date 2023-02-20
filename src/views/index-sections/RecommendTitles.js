import React, { useEffect, useRef, useState } from "react";
import styles from "./recommendTitles.module.css";
import NavigateContainer from "./NavigateContainer";

function RecommendTitles({ contents }) {


    const mounted = useRef();
    const [recommendContents, setRecommendContents] = useState(null);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            setRecommendContents(contents)
        } else {
        }
    }, [mounted]);

    return (
        recommendContents
            ? <div className={`${styles['content-section']}`}>
                <div className={styles['flex-site']}>
                    {
                        recommendContents.map((recommend, index) => {
                            if (index >= 10) return
                            return (
                                <NavigateContainer
                                    index={index}
                                    contentID={recommend._id}
                                    customClassName={"flex-box"}>

                                    <div className={styles['title-mainImage']} />

                                    <div className={styles['title-wrapper']}>
                                        <div className={`${styles.title}`} key={index + 'divTitleRec'}>
                                            {recommend.title}
                                        </div>
                                        <div
                                            className={`${styles.content}`}
                                            dangerouslySetInnerHTML={{ __html: recommend.content }} />
                                        <div className={styles['title-more']} />
                                    </div>
                                </NavigateContainer>
                            )
                        })
                    }
                </div>
            </div>
            : null);
}

export default RecommendTitles;