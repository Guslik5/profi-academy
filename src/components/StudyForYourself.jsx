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
        "title": "Обучение для себя",
        "text": "Описание (Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }

    const dataForYourselfLeftBlock = [
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
        <StyledStudyForYourself>
            <BlackContainerForHomePage title={"Обучение для себя"} text="Ваш текст(Ut enim ad minim veniam, qui blanditiis praesentium)"/>
            <SectionDirections rigthBlock={dataForYourselfRightBlock} leftBlocks={dataForYourselfLeftBlock} reverse={true} />
        </StyledStudyForYourself>
    );
}

export default StudyForYourself;

