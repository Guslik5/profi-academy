import React from 'react';
import {Link} from 'react-router-dom';

function CategoryList({categories}) {
    const containerStyle = {
        maxWidth: '800px',
        margin: '50px auto',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    };

    const headerStyle = {
        color: '#333',
        marginBottom: '30px'
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px'
    };

    const buttonStyle = {
        padding: '12px 25px',
        fontSize: '1.1em',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        textDecoration: 'none',
        display: 'inline-block'
    };

    const buttonHoverStyle = {
        backgroundColor: '#218838'
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Выберите категорию курсов:</h2>
            <div style={buttonContainerStyle}>
                {categories.map(category => (
                    <Link
                        key={category}
                        to={`/courses/${category}`}
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoryList;