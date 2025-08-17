import React from "react";

import BlackContainerForHomePage from "./BlackContainerForHomePage.jsx";
import SectionDirections from "./SectionDirections.jsx";
import linesBackground from '../assets/linesBackground2.svg';
import styled from "styled-components"; // Замените на правильный путь к вашему файлу

const StyledStudyForBusiness = styled.div`
      width: 100%;
      height: 100%; /* Или укажите конкретную высоту, если необходимо */
      min-height: 100vh; /* Обеспечьте покрытие всего экрана по высоте, если нужно */

      background-image: url(${linesBackground});
      background-size: cover; /* Растянуть изображение, чтобы покрыть всю область */
      background-position: center; /* Центрировать изображение */
      background-repeat: no-repeat; /* Предотвратить повторение изображения */
    `;

function StudyForBusiness() {

    const dataForBusinessRightBlock = {
        "title": "Консалтинг",
        "text": "..."
    }

    const dataForBusinessLeftBlock = [
        {
            "title": "Лицензирование",
            "text": "...",
            "count": "01",
        },
        {
            "title": "Аттестация",
            "text": "...",
            "count": "02",
        },
        {
            "title": "Вступление в СРО",
            "text": "...",
            "count": "03",
        },
        {
            "title": "Пожарный аудит",
            "text": "...",
            "count": "04",
        },
        {
            "title": "СОУТ",
            "text": "...",
            "count": "05",
        },
        {
            "title": "Расчет рисков",
            "text": "...",
            "count": "06",
        },
    ]

    return (
        <StyledStudyForBusiness>
            <BlackContainerForHomePage title={"Консалтинг"} text="..."/>
            <SectionDirections rigthBlock={dataForBusinessRightBlock} leftBlocks={dataForBusinessLeftBlock} reverse={false} />
        </StyledStudyForBusiness>
    );
}

export default StudyForBusiness;

