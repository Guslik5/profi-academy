import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Импортируем useParams и Link
import CourseCard from './CourseCard';
import SectionAdditionalCards from "./SectionАdditionalСards.jsx";
import styled from "styled-components";

function CourseListPage({ allCourses }) { // Теперь принимает ВСЕ курсы
    const { categoryType } = useParams(); // Получаем параметр из URL

    // Фильтруем курсы прямо здесь, используя categoryType из URL
    const courses = allCourses.filter(course => course.type === categoryType);

    // Стили (остаются такими же)
    const courseGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '20px auto'
    };

    const headerStyle = {
        textAlign: 'center',
        color: '#333',
        marginTop: '30px'
    };

    const buttonStyle = {
        display: 'block',
        margin: '20px auto',
        padding: '10px 20px',
        fontSize: '1em',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none', // Для Link, чтобы убрать подчеркивание
        textAlign: 'center',
        width: 'fit-content' // чтобы кнопка не растягивалась на всю ширину
    };

    const noCoursesStyle = {
        textAlign: 'center',
        color: '#777',
        fontSize: '1.1em',
        marginTop: '50px'
    };
    const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* Разрешаем перенос на новую строку */
    gap: 10px; /* Расстояние между карточками */
    justify-content: center; /* Центрируем карточки */
    align-items: center;
    padding: 10px;
`;
    const cardData = [
        { id: 1, term: "от 1 месяца", backgroundType: "pattern1" },
        { id: 2, term: "от 1 месяца", backgroundType: "pattern2" },
        { id: 3, term: "от 1 месяца", backgroundType: "pattern3" },
        { id: 4, term: "от 1 месяца", backgroundType: "pattern4" },
    ];

    return (
        <div>
            <CardContainer>
                {cardData.map(card => (
                    <SectionAdditionalCards
                        key={card.id}
                        term={card.term}
                        backgroundType={card.backgroundType}
                    />
                ))}
            </CardContainer>
            
            <Link to="/" style={buttonStyle}>
                &larr; Вернуться к категориям
            </Link>
            <h2 style={headerStyle}>Курсы по категории: {categoryType}</h2>
            {courses.length === 0 ? (
                <p style={noCoursesStyle}>
                    В категории "{categoryType}" пока нет курсов.
                </p>
            ) : (
                <div style={courseGridStyle}>
                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CourseListPage;