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
        "title": "Обучение для бизнеса",
        "text": "Описание (Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }

    const dataForBusinessLeftBlock = [
        {
            "title": "Направление 1",
            "text": "Описание (Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            "count": "01",
        },
        {
            "title": "Направление 2",
            "text": "Описание (Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            "count": "02",
        },
        {
            "title": "Направление 3",
            "text": "Описание (Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            "count": "03",
        },
        {
            "title": "Направление 4",
            "text": "Описание (Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            "count": "04",
        },
        {
            "title": "Направление 5",
            "text": "Описание (Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            "count": "05",
        },
    ]

    return (
        <StyledStudyForBusiness>
            <BlackContainerForHomePage title={"Обучение для бизнеса"} text="Ваш текст(Ut enim ad minim veniam, qui blanditiis praesentium)"/>
            <SectionDirections rigthBlock={dataForBusinessRightBlock} leftBlocks={dataForBusinessLeftBlock} reverse={false} />
        </StyledStudyForBusiness>
    );
}

export default StudyForBusiness;

