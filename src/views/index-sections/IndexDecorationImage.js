import React from "react";
import styles from "./indexDecorationImage.module.css";


function IndexDecorationImage({ imageType }) {

    return (<div className={`${styles.image} ${styles[imageType]}`}></div>);
}

export default IndexDecorationImage;