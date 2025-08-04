import React, {useEffect} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import SliderDocumentsWithOfficialPortal from "../components/SliderDocumentsWithOfficialPortal.jsx";
import LinksDocuments from "../components/linksDocuments.jsx";
import Footer from "../components/Footer.jsx";

function Documents() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const links = [
        {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },
        {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },
        {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },
        {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },
        {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },
        {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },
        {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },
        {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },
        {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },    {
            "Выписка из реестра лицензий на осуществление образовательной деятельности": "https://ya.ru/"
        },
    ];

    return (
        <>
            <Container className=" my-5 px-5 fw-me fs-1">
                Документы
            </Container>
            <SliderDocumentsWithOfficialPortal/>
            {/*Вот тут написать код*/}
            <LinksDocuments links={links}/>
        </>
    );
}

export default Documents;