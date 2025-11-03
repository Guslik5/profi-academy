import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Импортируем useParams и Link
import CourseCard from './CourseCard';

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

    return (
        <div>
            {/* Используем Link для навигации обратно на главную */}
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