import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    // Получаем текущий объект location (содержит pathname, search и т.д.)
    const { pathname } = useLocation();

    // Хук useEffect будет срабатывать каждый раз, когда меняется pathname
    useEffect(() => {
        // Прокручиваем окно в верхний левый угол
        window.scrollTo(0, 0);
    }, [pathname]); // Зависимость от pathname

    // Этот компонент ничего не рендерит
    return null;
}

export default ScrollToTop;

