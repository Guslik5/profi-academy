import React, { useEffect } from 'react';
import $ from 'jquery'; // Импортируем jQuery

function AccessibilityButton() {
    useEffect(() => {
        // Загружаем скрипты после монтирования компонента
        const script1 = document.createElement('script');
        script1.src = 'https://lidrekon.ru/slep/js/jquery.js';
        script1.async = true;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = 'https://lidrekon.ru/slep/js/uhpv-full.min.js';
        script2.async = true;
        document.body.appendChild(script2);
        console.log("скрипты загружены")

        // Очистка при размонтировании компонента
        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
            // Дополнительная очистка, если необходимо (см. ниже)
        };
    }, []);

    return (
        <img
            id="specialButton"
            style={{ cursor: 'pointer'}}
            src="https://lidrekon.ru/images/special.png"
            alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
            title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
        />
    );
}

export default AccessibilityButton;