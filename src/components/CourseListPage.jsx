import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import searchIcon from '../assets/searchIcon.png'
import SectionAdditionalCards from "./SectionАdditionalСards.jsx";
import CourseCard from "./CourseCard.jsx";

const StyledButton = styled.button`
    background-color: #000;       /* чёрный фон */
    color: #fff;                  /* белый текст */
    border: none;
    border-radius: 9999px;        /* "pill" — полностью закруглённая */
    padding: 12px 28px;          /* вертикальный и горизонтальный отступ */
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: inline-block;
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
    transition: transform 0.08s ease, background-color 0.15s ease, opacity 0.15s ease;

    &:hover {
        background-color: #111;     /* чуть светлее/темнее для ховера */
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(0,0,0,0.12);
    }
`;

const CoursesGrid = styled.div`
    /* 1. Центрирование и ограничение ширины */
    max-width: 1300px; /* Установите максимальную ширину для всего блока карточек */
    margin: 0 auto;    /* Центрирует блок по горизонтали */
    padding: 0 15px;   /* Небольшой отступ по бокам для маленьких экранов */

    /* 2. Сетка для размещения элементов */
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 колонки одинаковой ширины */
    gap: 30px; /* Равное расстояние между карточками (используется вместо margin) */

    /* 3. Адаптивность: 2 карточки на средних экранах */
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); /* 2 колонки */
        gap: 20px; /* Уменьшаем отступ */
    }

    /* 4. Адаптивность: 1 карточка на маленьких экранах (телефонах) */
    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* 1 колонка */
        gap: 15px;
    }
`;


const SearchContainer = styled(Container)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    max-width: 1150px;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #b7b7b7;
    border-radius: 999px; 
    padding: 10px 20px;
    flex-grow: 1;
    box-shadow: none; 
    min-width: 250px;
`;


const SearchIcon = styled.span`
    margin-right: 12px;
    color: #333;
    font-size: 1.4em;
    display: flex; 
    align-items: center;
`;


const StyledInput = styled.input`
    border: none;
    outline: none;
    font-size: 1rem; 
    color: #333;
    flex-grow: 1;
    min-width: 100px;

    &::placeholder {
        color: #666;
        font-size: 1rem;
    }
`;

const CardContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

const CategoryNameContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 50px 0 20px;
`;

const SearchButton = styled.button`
    background-color: #00a89d; 
    color: #fff;
    border: 1px solid #00a89d;
    border-radius: 999px; 
    padding: 12px 25px;
    font-size: 1rem;
    font-weight: normal;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); 

    &:hover {
        background-color: #00938a;
        border-color: #00938a;
    }

    &:active {
        background-color: #008078;
        border-color: #008078;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
`;

const COURSES_PER_PAGE = 50;

function CourseListPage({allCategory}) {

    const {categoryId} = useParams();
    const numericCategoryId = parseInt(categoryId, 10);
    
    const [categoryInfo, setCategoryInfo] = useState(null);
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    const cardData = [
        {id: 1, term: "от 1 месяца", backgroundType: "pattern1"},
        {id: 2, term: "от 1 месяца", backgroundType: "pattern2"},
        {id: 3, term: "от 1 месяца", backgroundType: "pattern3"},
        {id: 4, term: "от 1 месяца", backgroundType: "pattern4"},
    ];
    
    const fetchCoursesBatch = useCallback(async (currentSearchTerm, currentOffset, isInitialLoad) => {

        if (isInitialLoad) {
            setLoadingInitial(true);
            setLoadingMore(false);
            setCourses([]);
            setOffset(0);         
            setHasMore(true);     
        } else {
            setLoadingMore(true);
        }
        setError(null);

        if (isNaN(numericCategoryId) || !numericCategoryId || !categoryInfo) {
            setError(isNaN(numericCategoryId) || !numericCategoryId ? "Неверный ID категории." : "Информация о категории не загружена.");
            if (isInitialLoad) setLoadingInitial(false);
            else setLoadingMore(false);
            setHasMore(false);
            return;
        }

        try {
            const countParam = currentOffset / COURSES_PER_PAGE;

            console.log(`Отправка запроса:
                category_id: ${numericCategoryId},
                name: "${currentSearchTerm}",
                count: ${countParam} (соответствует смещению ${currentOffset})
            `);

            const response = await fetch('http://127.0.0.1:8000/api/get-courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    category_id: numericCategoryId,
                    name: currentSearchTerm,
                    count: countParam,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Неизвестная ошибка сервера' }));
                throw new Error(`Ошибка HTTP: ${response.status} - ${errorData.message || 'Ошибка сервера'}`);
            }

            console.log("Запрос выполнен, получен ответ.");
            const data = await response.json();
            const newCourses = data.result || [];
            setCourses(prevCourses => (isInitialLoad ? newCourses : [...prevCourses, ...newCourses]));
            
            setOffset(currentOffset + newCourses.length);
            
            setHasMore(newCourses.length === COURSES_PER_PAGE);

        } catch (err) {
            console.error("Ошибка при получении курсов:", err);
            setError(err.message || "Не удалось загрузить курсы.");
            if (isInitialLoad) {
                setCourses([]);
                setOffset(0);
            }
            setHasMore(false);
        } finally {
            if (isInitialLoad) setLoadingInitial(false);
            else setLoadingMore(false);
        }
    }, [numericCategoryId, categoryInfo]); 


    useEffect(() => {
        setCourses([]);
        setOffset(0);
        setHasMore(true);
        setLoadingInitial(true);
        setLoadingMore(false);
        setError(null);

        if (isNaN(numericCategoryId)) {
            setError("Неверный ID категории в URL.");
            setCategoryInfo(null);
            setLoadingInitial(false);
            setHasMore(false);
            return;
        }
        
        const foundCategory = allCategory.find(category => category.id === numericCategoryId);
        if (!foundCategory) {
            setError(`Категория с ID ${categoryId} не найдена в списке.`);
            setCategoryInfo(null);
            setLoadingInitial(false);
            setHasMore(false);
            return;
        }
        setCategoryInfo(foundCategory);
        
        fetchCoursesBatch(searchTerm, 0, true);
    }, [numericCategoryId, allCategory, searchTerm, fetchCoursesBatch, categoryId]);
    
    const handleLoadMore = () => {
        if (hasMore && !loadingMore && !loadingInitial) {
            fetchCoursesBatch(searchTerm, offset, false);
        }
    };
    
    const handleSearchButtonClick = () => {
        setCourses([]);
        setOffset(0);
        setHasMore(true);
        setLoadingInitial(true);
        fetchCoursesBatch(searchTerm, 0, true);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchButtonClick();
        }
    };
    
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
            <CategoryNameContainer>
                <h2 >{categoryInfo ? categoryInfo.name : 'Категория'}</h2 >
            </CategoryNameContainer>
            <SearchContainer>
                <InputWrapper>
                    <SearchIcon role="img" aria-label="Иконка поиска"><img src={searchIcon} width="35px"/></SearchIcon>
                    <StyledInput
                        type="text"
                        placeholder="Поиск по курсам..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </InputWrapper>
                {/*<SearchButton onClick={handleSearchButtonClick}>Поиск</SearchButton> // кнопка поиска*/}
            </SearchContainer>
            

            {loadingInitial && courses.length === 0 ? (
                <div style={{textAlign: 'center', padding: '50px', fontSize: '1.2em'}}>Загрузка курсов...</div>
            ) : error ? (
                <div style={{color: 'red', textAlign: 'center', padding: '50px', fontSize: '1.2em'}}>Ошибка: {error}</div>
            ) : courses.length === 0 && !loadingMore ? (
                <p>
                    Таких курсов нет.
                </p>
            ) : (
                <>
                    <CoursesGrid>
                        {courses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </CoursesGrid>

                    {loadingMore && (
                        <div style={{textAlign: 'center', padding: '20px', fontSize: '1.1em', color: '#007bff'}}>Загрузка еще курсов...</div>
                    )}

                    {hasMore && !loadingInitial && !loadingMore && (
                        <div className="d-flex justify-content-center align-items-center m-5">
                            <StyledButton
                                onClick={handleLoadMore}
                                disabled={loadingMore}
                            >
                                Загрузить еще
                            </StyledButton>
                        </div>
                    )}

                    {!hasMore && !loadingInitial && !loadingMore && courses.length > 0 && (
                        <p style={{textAlign: 'center', color: '#777', marginTop: '20px'}}>Все курсы загружены.</p>
                    )}
                </>
            )}
        </div>
    );
}

export default CourseListPage;
