import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import SectionAdditionalCards from "./SectionАdditionalСards.jsx";
import styled from "styled-components";

const SearchBarContainer = styled.div`
    display: flex;
    gap: 10px; /* Расстояние между полем ввода и кнопкой */
    margin-bottom: 30px; /* Отступ под поисковой строкой */
    align-items: center;
    justify-content: center; /* Центрируем поисковую строку */
    padding: 0 15px; /* Небольшие отступы по бокам */
`;

const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1; /* Позволяет полю ввода занимать доступное пространство */
    border: 1px solid #ddd;
    border-radius: 25px; /* Закругленные углы для "пилюли" */
    padding: 8px 15px; /* Внутренние отступы */
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Легкая тень */
    max-width: 600px; /* Ограничиваем максимальную ширину */
`;

    const SearchIcon

= styled . span `
    margin-right: 10px;
    color: #888;
    font-size: 1.2em; /* Размер иконки */
    `;

    const SearchInput

= styled . input` border: none;
    outline: none;
    flex-grow: 1; /* Поле ввода занимает всю оставшуюся ширину */
    font-size: 1em;
    padding: 0;
    color: #333;

    &::placeholder {
        color: #999;
    }
    `;

    const SearchButton

= styled . button` background-color: #00897b; /* Цвет кнопки из примера */
    color: white;
    border: none;
    border-radius: 25px; /* Закругленные углы */
    padding: 10px 25px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #00695c; /* Темнее при наведении */
    }
    `;

function CourseListPage({ allCategory }) {
    const { categoryId } = useParams();
    const numericCategoryId = parseInt(categoryId, 10);
    const [categoryInfo, setCategoryInfo] = useState(null);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (isNaN(numericCategoryId)) {
            setError("Неверный ID категории в URL.");
            setCategoryInfo(null);
            setLoading(false);
            return;
        }
        
        const found = allCategory.find(category => category.id === numericCategoryId);

        if (found) {
            setCategoryInfo(found);
        } else {
            setCategoryInfo(null);
            setError(`Категория с ID ${categoryId} не найдена в списке.`);
            setLoading(false);
        }
    }, [numericCategoryId, allCategory, categoryId]);
    useEffect(() => {
        if (isNaN(numericCategoryId) || !numericCategoryId || error) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);   
        setCourses([]);   

        const fetchCourses = async () => {
            try {
                console.log("пошел запрос")
                const response = await fetch(`http://localhost:8000/api/get-courses`, {
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json', 
                    },                    body: JSON.stringify({ 
                        category_id: numericCategoryId,
                        name: "", 
                        count: count,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                console.log("выполнился")
                const data = await response.json();
                setCourses(data);
            } catch (err) {
                console.error("Ошибка при получении курсов:", err);
                setError("Не удалось загрузить курсы.");
            } finally {
                console.log("финалочка")
                setLoading(false);
            }
        };

        fetchCourses(); // Вызываем функцию загрузки курсов
    }, [numericCategoryId, error]); // Зависимости: numericCategoryId (для перезагрузки при смене категории), error (чтобы не фетчить, если категория не найдена)


    // --- Логика отображения на основе состояний loading, error, categoryInfo и courses ---

    // 1. Отображение состояния загрузки
    if (loading) {
        return <div style={{textAlign: 'center', padding: '50px', fontSize: '1.2em'}}>Загрузка курсов...</div>;
    }

    // 2. Отображение сообщения об ошибке
    if (error) {
        return <div style={{color: 'red', textAlign: 'center', padding: '50px', fontSize: '1.2em'}}>Ошибка: {error}</div>;
    }

    // 3. Если категория не найдена (и нет ошибок или загрузки)
    if (!categoryInfo) {
        return <div style={{textAlign: 'center', padding: '50px', fontSize: '1.2em'}}>Категория не найдена.</div>;
    }

    // --- Ваши стили (без изменений) ---
    const courseGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '20px auto'
    };

    const headerStyle = {
        marginLeft: '10%',
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
        textDecoration: 'none',
        textAlign: 'center',
        width: 'fit-content'
    };

    const noCoursesStyle = {
        textAlign: 'center',
        color: '#777',
        fontSize: '1.1em',
        marginTop: '50px'
    };
    const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        align-items: center;
        padding: 10px;
    `;
    const cardData = [
        { id: 1, term: "от 1 месяца", backgroundType: "pattern1" },
        { id: 2, term: "от 1 месяца", backgroundType: "pattern2" },
        { id: 3, term: "от 1 месяца", backgroundType: "pattern3" },
        { id: 4, term: "от 1 месяца", backgroundType: "pattern4" },
    ];

    // --- Основное отображение компонента ---
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
            <h2 style={headerStyle}>Курсы по категории: {categoryInfo.name}</h2>
            
            {courses.length === 0 ? (
                <p style={noCoursesStyle}>
                    В категории "{categoryInfo.name}" пока нет курсов.
                </p>
            ) : (
                <div style={courseGridStyle}>
                    {/* Итерируем по массиву курсов из состояния и отображаем CourseCard */}
                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            )}

            {/* Возможно, SectionAdditionalCards должен быть ниже, или его логика должна зависеть от курсов */}
            {/* <SectionAdditionalCards cardData={cardData} /> */}
            <Link to={`/contacts`} style={buttonStyle}>Оставить заявку</Link>
        </div>
    );
}

export default CourseListPage;