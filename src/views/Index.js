import React, { useEffect, useRef, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import NewTitles from "./index-sections/NewTitles.js";
import Carousel from "./index-sections/Carousel.js";
import IndexDecorationImage from "./index-sections/IndexDecorationImage.js";

import styles from "./index.module.css"
import RecommendTitles from "./index-sections/RecommendTitles.js";

import { getTitleContents } from "./../assets/js/titleContents";
import { getTagsContents } from "./../assets/js/tagContents";


function Index() {

  const mounted = useRef();

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const [_titleContents_, setTitleContents] = useState(null);
  const [_tagContents_, setTagContents] = useState(null);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      getTitleContents()
        .then((titleContents) => {
          console.log(titleContents);
          setTitleContents(titleContents)
        })
      getTagsContents()
        .then(tags => tags.filter(tag => tag.showOnPage === 'true'))
        .then(tags => {
          console.log(tags)
          setTagContents(tags)
        })

    }
  }, [mounted]);
  return (
    <>

      <IndexNavbar />
      <Carousel />
      <IndexDecorationImage imageType={'cut'} />
      {_titleContents_
        ? <NewTitles contents={_titleContents_} />
        : null}
      <IndexDecorationImage imageType={'recommend'} />
      {_titleContents_
        ? <RecommendTitles contents={_titleContents_} />
        : null}
      <DarkFooter tags={_tagContents_} />
    </>
  );
}

export default Index;
