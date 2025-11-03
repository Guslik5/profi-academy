import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from "./pages/Home.jsx";
import Documents from "./pages/Documents.jsx";
import OurMissions from "./components/template.jsx";
import CourseListPage from "./components/CourseListPage.jsx";
import CategoryList from "./components/CatalogPage.jsx";

const mockCoursesData = [
    // --- Курсы из раздела "Обучение" ---
    { id: 1, name: 'Курс по Рабочим профессиям', hours: 20, price: 199, type: 'Рабочие профессии' },
    { id: 2, name: 'Повышение квалификации для инженеров', hours: 30, price: 249, type: 'Повышение квалификации' },
    { id: 3, name: 'Профессиональная переподготовка: Web-разработчик', hours: 45, price: 399, type: 'Профессиональная переподготовка' },
    { id: 4, name: 'Основы Пожарной безопасности', hours: 15, price: 129, type: 'Пожарная безопасность' },
    { id: 5, name: 'Курс по Охране труда, первой помощи', hours: 25, price: 219, type: 'Охрана труда, первая помощь, высота, ОЗП' },
    // Добавим еще для примера, чтобы было по несколько курсов в категории
    { id: 6, name: 'Сварщик: Основы и практика', hours: 40, price: 350, type: 'Рабочие профессии' },
    { id: 7, name: 'Продвинутый курс по Высотным работам', hours: 30, price: 280, type: 'Охрана труда, первая помощь, высота, ОЗП' },

    // --- Курсы из раздела "Консалтинг" (можно считать это типами курсов по консалтингу) ---
    { id: 8, name: 'Оформление Лицензирования строительной деятельности', hours: 10, price: 150, type: 'Лицензирование' },
    { id: 9, name: 'Подготовка к Аттестации специалистов ИТР', hours: 20, price: 250, type: 'Аттестация специалистов' },
    { id: 10, name: 'Особенности Вступления в СРО', hours: 8, price: 100, type: 'Вступление в СРО' },
    { id: 11, name: 'Проведение Пожарного аудита на предприятии', hours: 12, price: 180, type: 'Пожарный аудит' },
    { id: 12, name: 'Внедрение СОУТ: Пошаговая инструкция', hours: 18, price: 220, type: 'СОУТ' },
    { id: 13, name: 'Методика Расчета рисков для производств', hours: 15, price: 190, type: 'Расчет рисков' },
    // И еще один, чтобы были дубликаты типов
    { id: 14, name: 'Ускоренный курс по Лицензированию', hours: 7, price: 90, type: 'Лицензирование' },
];
function App() {
    const uniqueCategories = [...new Set(mockCoursesData.map(course => course.type))];


    return (
        <BrowserRouter>
            <Routes>
                {/* Layout больше не принимает uniqueCategories, так как Header сам будет их формировать */}
                <Route path="/" element={<Layout />}>
                    {/* Home больше не принимает uniqueCategories */}
                    <Route index element={<Home />} />

                    <Route path="documents" element={<Documents />} />
                    <Route path="ourMission" element={<OurMissions />} />
                    <Route path="contacts" element={<div><h1>Контакты</h1><p>Наша контактная информация.</p></div>} /> {/* Добавил заглушку для контактов */}
                    <Route path="/work-professions" element={<div><h1>Рабочие профессии - Страница</h1></div>} /> {/* Заглушка, если это отдельная страница */}
                    {/* ... другие заглушки для ваших статических страниц, если они есть ... */}

                    {/* Маршрут для страницы курсов по конкретной категории */}
                    {/* Путь остается тот же, `/courses/:categoryType` */}
                    <Route
                        path="courses/:categoryType"
                        element={<CourseListPage allCourses={mockCoursesData} />} // allCourses передаем для фильтрации
                    />
                </Route>
                <Route path="*" element={<h2 style={{textAlign: 'center', color: 'red', marginTop: '50px'}}>404 Страница не найдена!</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
