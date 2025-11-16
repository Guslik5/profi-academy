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
import styled from "styled-components";

const MainDivContainer = styled.div`
    padding-top: 150px;
    @media (max-width: 768px) {
        padding-top: 0; /* Адаптируйте для маленьких экранов, если высота хедера меняется */
    }
`

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
        console.log("da: ", document.getElementById('contacts'))

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
        <MainDivContainer>
            <Banner1 />
            <BannerAllTools />
            <StudyForYourself/>
            <StudyForBusiness/>

            <div style={{margin: "5rem 5vw ", border: "1px solid black", opacity: "50%"}}></div>

            <SectionConsultation />
            <Contacts id="contacts"/>
            
        </MainDivContainer>
    );
}

export default Home;