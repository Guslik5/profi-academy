import React from 'react';
import { useParams } from 'react-router-dom';
import CourseList from './CourseList';

function CatalogPage({ allCourses }) {
    const { categoryType } = useParams(); // Получаем параметр из URL, например 'Программирование'

    // Фильтруем курсы по типу
    const filteredCourses = allCourses.filter(
        (course) => course.type === categoryType
    );

    return (
        <div className="catalog-page">
            <h2>Каталог курсов: {categoryType}</h2>
            <CourseList courses={filteredCourses} />
        </div>
    );
}

export default CatalogPage;