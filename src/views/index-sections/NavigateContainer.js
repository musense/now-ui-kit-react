import React, { useId } from "react";
import styles from './newTitle.module.css'
import { useNavigate } from "react-router-dom";

function NavigateContainer({ contentID ,children , customClassName="title-container"}) {
    const id = useId()
    const navigate = useNavigate()
    function goToContent(contentID) {
        if (contentID === null) return
        navigate(`/content/${contentID}`)
    }
    return (<div
        className={styles[customClassName]}
        key={id}
        onClick={() => goToContent(contentID)}
    >
        {children}
    </div>);
}

export default NavigateContainer;