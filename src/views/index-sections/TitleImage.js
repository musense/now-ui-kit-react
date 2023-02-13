import React from "react";

import styles from './titleImage.module.css'
function TitleImage({ logo, title }) {

    return (<div className={`${styles['title-wrapper']} ${styles[logo]}`}>
        <div className={`${styles['title-logo']}`}></div>
        <div className={`${styles['title-image']}`}></div>
        <div>{title}</div>
    </div>);
}

export default TitleImage;