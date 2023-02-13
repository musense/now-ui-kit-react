import React, { useEffect } from "react";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ContentPage from "views/index-sections/ContentPage";

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/index')
        // navigate('/content/elit veniam commodo')
    }, []);

    return (
        <>
            <Routes>
                <Route exact path="/index" element={(<Index />)} />
                <Route path="/nucleo-icons" element={(<NucleoIcons />)} />
                <Route path="/landing-page" element={(<LandingPage />)} />
                <Route path="/profile-page" element={(<ProfilePage />)} />
                <Route path="/login-page" element={(<LoginPage />)} />
                <Route path="/content/:id" element={(<ContentPage />)} />
                <Route path="*" element={<Navigate to="/index" replace />} />
                {/* <Redirect to="/index" />
                <Redirect from="/" to="/index" /> */}
            </Routes>
        </>
    )
}