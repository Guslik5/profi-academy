import React from 'react';
import Banner1 from "../components/Banner1.jsx";
import {BannerAllTools} from "../components/BannerAllTools.jsx";
import StudyForBusiness from "../components/StudyForBusiness.jsx";
import StudyForYourself from "../components/StudyForYourself.jsx";

function Home() {
    return (
        <>
            <Banner1 />
            <BannerAllTools />
            <StudyForBusiness/>
            <StudyForYourself/>
            <div style={{ paddingTop: "5rem", backgroundColor: "white" }}>

            </div>
        </>
    );
}

export default Home;