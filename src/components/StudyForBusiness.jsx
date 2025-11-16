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
        "text": "Решение любых вопросов бизнеса начинается здесь."
    }

    const dataForBusinessLeftBlock = [
        {
            "title": "Лицензирование",
            "text": "Лицензия МЧС, образовательная лицензия и т.д.",
            "count": "01",
        },
        {
            "title": "Аттестация специалистов",
            "text": "НАКС, Ростехнадзор, неразрушающий контроль и т.д.",
            "count": "02",
        },
        {
            "title": "Вступление в НРС",
            "text": "НОСТРОЙ/НОПРИЗ и т.д.",
            "count": "03",
        },
        {
            "title": "Вступление в СРО",
            "text": "",
            "count": "04",
        },
        {
            "title": "СОУТ и расчет рисков",
            "text": "",
            "count": "05",
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

