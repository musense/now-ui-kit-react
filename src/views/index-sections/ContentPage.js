import React, { useEffect, useId, useRef, useState } from "react";
// react plugin used to create switch buttons
// import Switch from "react-bootstrap-switch";
// plugin that creates slider
// import Slider from "nouislider";

// reactstrap components

import IndexNavbar from "components/Navbars/IndexNavbar";
import DarkFooter from "components/Footers/DarkFooter";

import { useParams, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
// core components

import { postLikeWithID, getTitleContents } from "./../../assets/js/titleContents";



function ContentPage({ ...props }) {
    // console.log(`TITLE_CONTENTS: ${TITLE_CONTENTS}`)

    const [isResolved, setIsResolved] = useState(false);
    const [_theContent_, setTheContent] = useState(null);

    const [like, setLike] = useState(null);
    const mounted = useRef();

    const navigate = useNavigate()
    const { id } = useParams()

    const findOneById = (arr = [], id = null) => {
        if (id === null || typeof id !== 'string') return null
        return [...arr].find(a => a._id === id)
    }


    async function onLikeClick() {
        // console.log('like clicked');
        const like = await postLikeWithID(id);
        setLike(prevLike => like)

    }
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            console.group(`ContentPage`);
            console.log(id);
            console.groupEnd(`ContentPage`);
            getTitleContents()
                .then((titleContents) => {
                    setIsResolved(true);
                    const theContent = findOneById(titleContents, id)
                    // console.log(theContent);
                    
                    setTheContent(theContent)
                    setLike(theContent.thumbUp)
                })
        }
    }
        , []);
    return (
        _theContent_
            ? (<>
                <IndexNavbar />
                <div className="wrapper">
                    <div className="main">
                        <div className="section section-basic">
                            <div className="content-page">
                                <div className="tags new-title" >
                                    {_theContent_.tags.map((tag, index) => {
                                        return <span key={index} className="tag">#<span>{tag}</span></span>
                                    })}
                                </div>
                                <h3 className="title new-title">
                                    {_theContent_.title}
                                </h3>

                                <div
                                    className="content new-title"
                                    dangerouslySetInnerHTML={{ __html: _theContent_.content }} />

                                <div className="misc new-title">
                                    <span>
                                        Created Date: {new Date(_theContent_.updatedAt).toLocaleDateString()}
                                    </span>
                                    <div>
                                        <span>
                                            Like: {like}
                                        </span>
                                        <Button
                                            color="info"
                                            className="mr-1"
                                            size="sm"
                                            onClick={() => onLikeClick()}
                                        >
                                            LIKE + 1
                                        </Button>
                                    </div>
                                </div>
                                <Button
                                    color="info"
                                    className="mr-1"
                                    onClick={() => navigate('/')}
                                >
                                    Back home
                                </Button>
                            </div>
                            <div className="more">

                            </div>
                        </div>
                    </div>
                    <DarkFooter />
                </div>
            </>)
            : null
    );
}

export default ContentPage;
