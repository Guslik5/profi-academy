import React from "react";

import BlackContainerForHomePage from "./BlackContainerForHomePage.jsx";
import SectionDirections from "./SectionDirections.jsx";
import styled from "styled-components";
import linesBackground from "../assets/linesBackground2.svg";


const StyledStudyForYourself = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;

    background-image: url(${linesBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

function StudyForYourself() {

    const dataForYourselfRightBlock = {
        "title": "Обучение",
        "text": "Сделайте верное вложение в свое будущее.\n" +
            "Выберите курс и начните учиться."
    }

    const dataForYourselfLeftBlock = [
        {
            "title": "Рабочие профессии",
            "text": "Стропальщик, электрогазосварщик,токарь, монтажник и т.д.",
            "count": "01",
            "href": "/courses/92"
        },
        {
            "title": "Повышение квалификации",
            "text": "Антитеррористическая защищенность объекта (территории), управление персоналом и кадровое делопроизводство и т.д.",
            "count": "02",
            "href": "/courses/96"
        },
        {
            "title": "Профессиональная переподготовка",
            "text": "Техносферная безопасность, гражданская оборона и защита в чрезвычайных ситуациях и т.д.",
            "count": "03",
            "href": "/courses/94"
        },
        {
            "title": "Пожарная безопасность",
            "text": "Специалист по пожарной профилактике и т.д.",
            "count": "04",
            "href": "/courses/1"
        },
        {
            "title": "Охрана труда",
            "text": "Оказание первой помощи пострадавшим, работы на высоте и т.д.",
            "count": "05",
            "href": "/courses/98"
        },
    ]

    return (
        <StyledStudyForYourself>
            <BlackContainerForHomePage title={"Обучение"} text="Наши направления"/>
            <SectionDirections rigthBlock={dataForYourselfRightBlock} leftBlocks={dataForYourselfLeftBlock}
                               reverse={true}/>
        </StyledStudyForYourself>
    );
}

export default StudyForYourself;

