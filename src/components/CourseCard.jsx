import React, { useState } from 'react'; // Не забудь импортировать useState

function CourseCard({ course }) {
    // Состояние для отслеживания наведения мыши
    const [isHovered, setIsHovered] = useState(false);

    // Стиль для основной карточки
    const cardStyle = {
        borderRadius: '16px',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '320px',
        minHeight: '280px',
        cursor: 'pointer', // Курсор-указатель, чтобы показать, что элемент кликабельный
        transition: 'all 0.3s ease', // Плавный переход для всех стилей при наведении
        // Добавим fontFamily для более точного соответствия изображению
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    };

    // Стиль, который применяется при наведении
    const hoverCardStyle = {
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)', // Тень становится более выраженной
        transform: 'translateY(-5px)',           // Карточка приподнимается
    };

    // Объединяем базовый стиль и стиль наведения
    const currentCardStyle = {
        ...cardStyle, // Базовые стили всегда применяются
        ...(isHovered ? hoverCardStyle : {}) // Если isHovered true, добавляем hoverCardStyle
    };

    // Стиль для категории (например, "Рабочие Профессии")
    const categoryStyle = {
        fontSize: '0.7em',
        color: '#888',
        marginBottom: '10px',
        fontWeight: 'normal',
        textTransform: 'uppercase' // Как на картинке
    };

    // Стиль для названия курса
    const titleStyle = {
        fontSize: '1em',
        fontWeight: '600',
        color: '#222',
        marginBottom: '20px',
        lineHeight: '1.4',
    };

    // Стиль для блока с часами и ценой
    const detailsRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: '20px' // Отступ перед кнопкой
    };

    // Стиль для отдельных деталей (часы, цена)
    const detailItemStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
        color: '#333',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase' // Как на картинке
    };

    // Стиль для кнопки
    const buttonStyle = {
        backgroundColor: '#00C49F',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '50px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.05em',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        outline: 'none',
        transition: 'background-color 0.2s ease',
    };

    // Обработчик клика
    const handleClick = () => {
        console.log('hello');
        // Здесь можно добавить логику перехода на страницу курса, открытия модального окна и т.д.
    };

    return (
        <div
            style={currentCardStyle} // Применяем объединенные стили
            onMouseEnter={() => setIsHovered(true)} // При наведении устанавливаем isHovered в true
            onMouseLeave={() => setIsHovered(false)} // При убирании курсора устанавливаем isHovered в false
            onClick={handleClick} // Обработчик клика
        >
            {/* Тип курса */}
            <p style={categoryStyle}>{course.type}</p>

            {/* Название курса */}
            <h3 style={titleStyle}>{course.name}</h3>

            {/* Часы и Цена в одной строке */}
            <div style={detailsRowStyle}>
                <p style={detailItemStyle}>{course.hours} ЧАСОВ</p>
                <p style={detailItemStyle}>{course.price} руб</p>
            </div>

            {/* Кнопка */}
            {/* Кнопка внутри кликабельной карточки может быть проблемой.
                Лучше, если она сама по себе будет кликабельна и не будет вызывать
                клик по родительской карточке. Для этого можно использовать event.stopPropagation()
                или вынести логику кнопки. Для простоты, пока оставляем так.
                Если нужна другая логика, дай знать.
            */}
            <button
                style={buttonStyle}
                onClick={(e) => {
                    e.stopPropagation(); // Остановить всплытие события, чтобы не вызывался клик по карточке
                    console.log('Кнопка "получить консультацию" нажата');
                    // Дополнительная логика для кнопки, например, открыть форму
                }}
            >
                получить консультацию
            </button>
        </div>
    );
}

export default CourseCard;
