import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom'; // Импортируем Link, если ссылки будут генерироваться здесь
import Layout from './components/Layout.jsx';
import Home from "./pages/Home.jsx";
import Documents from "./pages/Documents.jsx";
import OurMissions from "./components/template.jsx";
import CourseListPage from "./components/CourseListPage.jsx";
// import CategoryList from "./components/CatalogPage.jsx"; // Оставляем, если он используется для отображения списка категорий

const mockCourses = [
    {
        id: 92,
        name: "Рабочие профессии"
    },
    {
        id: 108,
        name: "Прочее"
    },
    {
        id: 96,
        name: "Повышение квалификации"
    },
    {
        id: 94,
        name: "Профессиональная переподготовка"
    },
    {
        id: 100,
        name: "Лицензирование"
    },
    {
        id: 102,
        name: "Аттестация специалистов"
    },
    {
        id: 106,
        name: "Вступление в СРО"
    }
];


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="documents" element={<Documents />} />
                    <Route path="ourMission" element={<OurMissions />} />
                    <Route path="contacts" element={<div><h1>Контакты</h1><p>Наша контактная информация.</p></div>} />
                    <Route path="/work-professions" element={<div><h1>Рабочие профессии - Страница</h1></div>} />
                    <Route
                        path="courses/:categoryId"
                        element={<CourseListPage allCategory={mockCourses} />}
                    />
                </Route>
                <Route path="*" element={<h2 style={{textAlign: 'center', color: 'red', marginTop: '50px'}}>404 Страница не найдена!</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
