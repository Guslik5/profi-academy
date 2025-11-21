import React from "react";

import BlackContainerForHomePage from "./BlackContainerForHomePage.jsx";
import SectionDirections from "./SectionDirections.jsx";
import linesBackground from '../assets/linesBackground2.svg';
import styled from "styled-components";

const StyledStudyForBusiness = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;

    background-image: url(${linesBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

function StudyForBusiness() {

    const dataForBusinessRightBlock = {
        "title": "Консалтинг",
        "text": "Решение любых вопросов бизнеса начинается здесь."
    }

    const dataForBusinessLeftBlock = [
        {
            "title": "Лицензирование",
            "text": "Лицензия МЧС, образовательная лицензия и т.д.",
            "count": "01",
            "href": "/courses/100"
        },
        {
            "title": "Аттестация специалистов",
            "text": "НАКС, Ростехнадзор, неразрушающий контроль и т.д.",
            "count": "02",
            "href": "/courses/102"
        },
        {
            "title": "Вступление в НРС",
            "text": "НОСТРОЙ/НОПРИЗ и т.д.",
            "count": "03",
            "href": "/courses/104"
        },
        {
            "title": "Вступление в СРО",
            "text": "",
            "count": "04",
            "href": "/courses/106"
        },
        {
            "title": "СОУТ и расчет рисков",
            "text": "",
            "count": "05",
            "href": "/courses/1"
        },
    ]

    return (
        <StyledStudyForBusiness className="my-5">
            {/*<BlackContainerForHomePage title={"Консалтинг"} text="..."/>*/}
            <SectionDirections rigthBlock={dataForBusinessRightBlock} leftBlocks={dataForBusinessLeftBlock} reverse={false} />
        </StyledStudyForBusiness>
    );
}

export default StudyForBusiness;

