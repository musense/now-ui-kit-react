import React from "react";
import styles from "./contentPage.module.css";
import { useNavigate } from "react-router-dom";

function Tag({ index, tagName }) {
    const navigate = useNavigate();
    function goToContentsByTag(tagName) {
        navigate(`/content/tag/${tagName}`)
    }

    return (<div
        onClick={() => goToContentsByTag(tagName)}
        key={index}
        className={styles['trend-tags-flex-tags']}
    >
        #&nbsp;&nbsp;{tagName}
    </div>);
}

export default Tag;