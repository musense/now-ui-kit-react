import DarkFooter from "components/Footers/DarkFooter";
import React from "react";
import { useOutletContext } from "react-router-dom";
import Carousel from "./index-sections/Carousel";

import IndexDecorationImage from "./index-sections/IndexDecorationImage";
import NewTitles from "./index-sections/NewTitles";
import RecommendTitles from "./index-sections/RecommendTitles";

function IndexView() {

    const { contents, tags } = useOutletContext()
    // console.group('IndexView');
    // console.log(contents);
    // console.groupEnd('IndexView');

    return (
        <>
            <Carousel />
            <IndexDecorationImage imageType={'cut'} />
            {
                contents
                    ? <NewTitles contents={contents} />
                    : null
            }
            <IndexDecorationImage imageType={'recommend'} />
            {
                contents
                    ? <RecommendTitles contents={contents} />
                    : null
            }
            <DarkFooter tags={tags} />
        </>
    );
}

export default IndexView;