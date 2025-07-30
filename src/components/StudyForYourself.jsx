import React from "react";

import BlackContainerForHomePage from "./BlackContainerForHomePage.jsx";
import SectionDirections from "./SectionDirections.jsx";


function StudyForBusiness() {

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
        <>
            <BlackContainerForHomePage title={"Обучение для себя"} text="Ваш текст(Ut enim ad minim veniam, qui blanditiis praesentium)"/>
            <SectionDirections rigthBlock={dataForYourselfRightBlock} leftBlocks={dataForYourselfLeftBlock} reverse={true} />
        </>
    );
}

export default StudyForBusiness;

