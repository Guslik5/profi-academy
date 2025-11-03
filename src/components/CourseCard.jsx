import React from 'react';

function CourseCard({ course }) {
    // Простые инлайн-стили для базового отображения
    const cardStyle = {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '150px'
    };

    const titleStyle = {
        fontSize: '1.2em',
        color: '#333',
        marginBottom: '10px'
    };

    const detailStyle = {
        fontSize: '0.9em',
        color: '#666',
        margin: '3px 0'
    };

    const priceStyle = {
        fontSize: '1.1em',
        fontWeight: 'bold',
        color: '#007bff',
        marginTop: '10px'
    };

    return (
        <div style={cardStyle}>
            <h3 style={titleStyle}>{course.name}</h3>
            <div>
                <p style={detailStyle}><strong>Часов:</strong> {course.hours}</p>
                <p style={detailStyle}><strong>Тип:</strong> {course.type}</p>
                <p style={priceStyle}><strong>Цена:</strong> ${course.price}</p>
            </div>
        </div>
    );
}

export default CourseCard;