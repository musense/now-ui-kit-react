import React, { useEffect, useRef, useState } from "react";

import styles from "./recommendTitles.module.css";

import { useNavigate } from "react-router-dom";

function RecommendTitles({contents}) {


    const navigate = useNavigate()
    const mounted = useRef();
    const [recommendContents, setRecommendContents] = useState(null);

    const sortByAndReturn = (arr = [], key = null) => {
        console.log(arr);

        if (key === null) return arr
        if (key && typeof key === 'string' && key.toLowerCase().indexOf('date') !== -1) {
            return [...arr].sort((a1, a2) => new Date(a2[key]) - new Date(a1[key]))
        }
        return [...arr].sort((a1, a2) => a2[key] - a1[key])
    }

    useEffect(() => {
        // console.group('RecommendTitles');
        // console.log(contents);
        // console.groupEnd('RecommendTitles');
        if (!mounted.current) {
            mounted.current = true;
            setRecommendContents(contents)
        } else {
        }
    }, [mounted]);

    function goToContent(content) {
        if (content === null) return
        navigate(`/content/${content._id}`)
    }

    return (
        recommendContents
            ? <div className={`${styles['content-section']}`}>
                <div className={styles['flex-site']}>
                    {
                        recommendContents.map((recommend, index) => {
                            if (index >= 10) return
                            return (
                                <div
                                    className={`${styles['title-container']} ${styles['flex-box']}`}
                                    key={index + 'divConRec'}
                                    onClick={() => goToContent(recommend)}
                                >
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

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            : null);
}

export default RecommendTitles;