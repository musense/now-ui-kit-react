import React, { useEffect } from "react";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

import { Routes, Route, useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/index')
    }, []);

    return (
        <>
            <Routes>
                <Route exact path="/index" element={(<Index />)} />
                <Route path="/nucleo-icons" element={(<NucleoIcons />)} />
                <Route path="/landing-page" element={(<LandingPage />)} />
                <Route path="/profile-page" element={(<ProfilePage />)} />
                <Route path="/login-page" element={(<LoginPage />)} />
                {/* <Redirect to="/index" />
                <Redirect from="/" to="/index" /> */}
            </Routes>
        </>
    )
}