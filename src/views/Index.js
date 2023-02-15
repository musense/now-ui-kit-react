import React, { useEffect, useRef, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import styles from "./index.module.css"

import { getTitleContents } from "./../assets/js/titleContents";
import { getTagsContents } from "./../assets/js/tagContents";

import { Outlet } from "react-router-dom";


function Index() {

  const mounted = useRef();

  const [_titleContents_, setTitleContents] = useState(null);
  const [_tagContents_, setTagContents] = useState(null);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      getTitleContents()
        .then((titleContents) => {
          // console.log(titleContents);
          setTitleContents(titleContents)
        })
      getTagsContents()
        .then(tags => tags.filter(tag => tag.showOnPage === 'true'))
        .then(tags => {
          // console.log(tags)
          setTagContents(tags)
        })

    }
  }, [mounted]);
  return (
    <>

      <IndexNavbar />

      <Outlet context={{ contents: _titleContents_, tags: _tagContents_ }} />
      
    </>
  );
}

export default Index;
