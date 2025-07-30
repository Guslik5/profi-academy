import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import '../App.css';

function Layout() {
    return (
        <div className="bg-body-tertiary">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;