import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from "./pages/Home.jsx";
import Documents from "./pages/Documents.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="documents" element={<Documents />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
