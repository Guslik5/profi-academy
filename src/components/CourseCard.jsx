import React from 'react';

function CourseCard({ course }) {
    return (
        <div className="course-card">
            <h3>{course.name}</h3>
            <p><strong>Тип:</strong> {course.type}</p>
            <p><strong>Продолжительность:</strong> {course.hours} часов</p>
            <p><strong>Цена:</strong> ${course.price}</p>
            <button>Подробнее</button>
        </div>
    );
}

export default CourseCard;