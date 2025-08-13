import React, {useEffect, useState} from 'react';
import Banner1 from "../components/Banner1.jsx";
import {BannerAllTools} from "../components/BannerAllTools.jsx";
import StudyForBusiness from "../components/StudyForBusiness.jsx";
import StudyForYourself from "../components/StudyForYourself.jsx";
import OurMission from "../components/OurMissionDesktop.jsx";
import OurMissionDesktop from "../components/OurMissionDesktop.jsx";
import OurMissionMobile from "../components/OurMissionMobile.jsx";
import SectionConsultation from "../components/SectionConsultation.jsx";
import Contacts from "../components/Contacts.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const data = [
        {
            text: "1",
        },
        {
            text: "2",
        },
        {
            text: "3",
        },
        {
            text: "4",
        }
    ]

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let componentToRender;
    if (windowWidth > 768) {
        componentToRender = <OurMissionDesktop data={data} />
    }
        else {
        componentToRender = <OurMissionMobile data={data}/>
    }

    return (
        <>
            <Banner1 />
            <BannerAllTools />
            <StudyForBusiness/>
            <StudyForYourself/>
            {componentToRender}

            <div style={{margin: "5rem 5vw ", border: "1px solid black", opacity: "50%"}}></div>

            <SectionConsultation/>
            <Contacts/>

        </>
    );
}

export default Home;