import React from "react";

import BlackContainerForHomePage from "./BlackContainerForHomePage.jsx";
import SectionDirections from "./SectionDirections.jsx";
import styled from "styled-components";
import linesBackground from "../assets/linesBackground2.svg";



const StyledStudyForYourself = styled.div`
      width: 100%;
      height: 100%; /* Или укажите конкретную высоту, если необходимо */
      min-height: 100vh; /* Обеспечьте покрытие всего экрана по высоте, если нужно */

      background-image: url(${linesBackground});
      background-size: cover; /* Растянуть изображение, чтобы покрыть всю область */
      background-position: center; /* Центрировать изображение */
      background-repeat: no-repeat; /* Предотвратить повторение изображения */
    `;

function StudyForYourself() {

    const dataForYourselfRightBlock = {
        "title": "Обучение",
        "text": "..."
    }

    const dataForYourselfLeftBlock = [
        {
            "title": "Рабочие профессии",
            "text": "...",
            "count": "01",
        },
        {
            "title": "Повышение квалификации",
            "text": "...",
            "count": "02",
        },
        {
            "title": "Профессиональная переподготовка",
            "text": "...",
            "count": "03",
        },
        {
            "title": "Пожарная безопасность",
            "text": "...",
            "count": "04",
        },
        {
            "title": "Охрана труда, первая помощь, высота, ОЗП",
            "text": "...",
            "count": "05",
        },
    ]

    return (
        <StyledStudyForYourself>
            <BlackContainerForHomePage title={"Обучение"} text="..."/>
            <SectionDirections rigthBlock={dataForYourselfRightBlock} leftBlocks={dataForYourselfLeftBlock} reverse={true} />
        </StyledStudyForYourself>
    );
}

export default StudyForYourself;

