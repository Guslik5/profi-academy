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
        "text": "Сделайте верное вложение в свое будущее.\n" +
            "Выберите курс и начните учиться."
    }

    const dataForYourselfLeftBlock = [
        {
            "title": "Рабочие профессии",
            "text": "Стропальщик, электрогазосварщик,токарь, монтажник и т.д.",
            "count": "01",
        },
        {
            "title": "Повышение квалификации",
            "text": "Антитеррористическая защищенность объекта (территории), управление персоналом и кадровое делопроизводство и т.д.",
            "count": "02",
        },
        {
            "title": "Профессиональная переподготовка",
            "text": "Техносферная безопасность, гражданская оборона и защита в чрезвычайных ситуациях и т.д.",
            "count": "03",
        },
        {
            "title": "Пожарная безопасность",
            "text": "...",
            "count": "04",
        },
        {
            "title": "Охрана труда",
            "text": "...",
            "count": "05",
        },
    ]

    return (
        <StyledStudyForYourself>
            <BlackContainerForHomePage title={"Обучение"} text="Наши направления"/>
            <SectionDirections rigthBlock={dataForYourselfRightBlock} leftBlocks={dataForYourselfLeftBlock} reverse={true} />
        </StyledStudyForYourself>
    );
}

export default StudyForYourself;

