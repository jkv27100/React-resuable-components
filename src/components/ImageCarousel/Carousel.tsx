import { useState } from "react";
import ImageSliderProps from "../../interfaces/ImageSliderProps";
import "./style.css";

const Carousel = ({ images }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  setTimeout(() => {
    if (current === length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }, 8000);

  const prevSlide = () => {
    setCurrent((prevState) => (prevState === 0 ? length - 1 : prevState - 1));
  };
  const nextSlide = () => {
    setCurrent((prevState) => (prevState === length - 1 ? 0 : prevState + 1));
  };

  return (
    <div className="carousel">
      <span className="left-arrow" onClick={prevSlide}>
        👈
      </span>
      <span className="right-arrow" onClick={nextSlide}>
        👉
      </span>

      {images.map((image, index) => (
        <div className={index === current ? "active" : "slide"} key={index}>
          {index === current ? (
            <img src={image.src} className="image" alt="img" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
