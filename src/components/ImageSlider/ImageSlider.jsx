import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        //? тут динамически обращаемся к массиву и объекту по индексу, далее к ключу url
        backgroundImage: `url(${slides[currentIndex].url})`,
        transition: '0.5s',
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    };

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    };

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '30px',
    };

    //? функция преключения на предыдущий слайд, проверяю если текущий стейт равен 0 то что бы перейти на последнее фото в массиве - сохраняем в переменную результат вычитания общей длинны массива минус 1 и получаем последний индекс. Его записываем в стейт и открывается последнее фото в массиве. Если слайд не превый то просто вычитаем 1 и переключаемся на предыдущий.
    function goToPrevios() {
        if (currentIndex === 0) {
            let newIndex = slides.length - 1;
            setCurrentIndex(newIndex);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    //?  функция перехода на следующий слайд, логика такая - в начале получаем индекс последнего слайда в массиве, и сравниваем - если текущий индекс равен последнему это значит что я на последнем слайде и на круг нужно заходить по новой, изменяем индекс на нулевой.
    function goToNext() {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    //? функция перехода между слайдами по индексу, тут всё просто , перезаписываем в стейт новый индекс текщего слайда который в свою очередь автоматически подставляется в бэкграунд дива slideStyles.
    function goToSlide(slideIndex) {
        setCurrentIndex(slideIndex);
    }

    return (
        <div style={sliderStyles}>
            <div
                style={leftArrowStyles}
                onClick={goToPrevios}>
                ❮
            </div>
            <div
                style={rightArrowStyles}
                onClick={goToNext}>
                ❯
            </div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        style={dotStyles}
                        onClick={() => goToSlide(slideIndex)}>
                        ⊗
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
