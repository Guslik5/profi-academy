import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './Header.jsx';
import '../App.css';
import Footer from "./Footer.jsx";
import styled from "styled-components";

const MainContent = styled.main`
    padding-top: 20px;

    @media (max-width: 768px) {
        padding-top: 70px;
    }
`;

function Layout() {
    return (
        <div className="bg-body-tertiary">
            <Header/>
            <MainContent>
                <Outlet/>
            </MainContent>
            <Footer/>
        </div>
    );
}

export default Layout;