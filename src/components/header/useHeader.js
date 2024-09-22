import { useState, useEffect } from "react";

const useHeader = () => {
    const [changeIcon, setChangeIcon] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    // Обновляем ширину окна при его изменении
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Убираем слушатель событий при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Функция для изменения состояния changeIcon в зависимости от ширины
    const isChange = () => {
        if (width <= 991) {
            setChangeIcon(prevState => !prevState);
        } else {
            setChangeIcon(false); // Обнуляем changeIcon для ширины > 991
        }
    };

    // Функция для сброса changeIcon и его отображения в консоли
    const isOpen = () => {
        setChangeIcon(false);
    };

    // Следим за изменениями в changeIcon и выводим их в консоль
    useEffect(() => {
        console.log("changeIcon изменен:", changeIcon);
    }, [changeIcon]);


    return {
        changeIcon,
        isChange,
        width,
        isOpen,


    };
};

export default useHeader;

