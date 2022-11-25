import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    //? тут динамически обращаемся к массиву и объекту по индексу, далее к ключу url
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  //? условие - если текущий стейт равен 0 то что бы уйти в последнее фото в массиве - сохраняем в переменную результат вычитания общей длинны массива минус 1 и получаем последний индекс. Его записываем в стейт и открывается последнее фото в массиве.
  function goToPrevios() {
    if (currentIndex === 0) {
      let newIndex = slides.length - 1;
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  //?  сравниваем стейт с длинной массива, если true то присваиваем стейту 0 индекс если нет прибавляем 1
  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevios}>
        {" "}
        ❮{" "}
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        {" "}
        ❯{" "}
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
