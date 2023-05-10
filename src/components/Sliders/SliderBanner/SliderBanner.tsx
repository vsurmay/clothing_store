import React, { useRef } from "react";
import "./SliderBanner.scss";
import { Carousel, Image } from "antd";
import Container from "../../Container/Container";
import LeftArrow from "../../../assets/img/home_slider/arrow-left.svg";
import RightArrow from "../../../assets/img/home_slider/arrow-right.svg";
import OutLineButton from "../../UI/Buttons/OutLineButton";
import silderImg1 from "../../../assets/img/home_slider/slider-img1.png";
import silderImg2 from "../../../assets/img/home_slider/slider-img2.png";

const Slider = () => {
  const carouselRef = useRef<any>(null);

  const clickNext = () => {
    carouselRef.current.next();
  };

  const clickPrev = () => {
    carouselRef.current.prev();
  };

  const arr: number[] = [1, 2, 3, 4];
  return (
    <div className={"slider__section"}>
      <Container>
        <div className="slider__wrapper">
          <Carousel className={"carousel"} ref={carouselRef}>
            {arr.map((el) => (
              <div key={el} className="slider">
                <div className="slider__describtion">
                  <h1 className="slider__describtion-title">
                    SUMMER SALE GEt{" "}
                    <span className="slider__describtion-sale">30% OFF</span> On
                    all dress.
                  </h1>
                  <OutLineButton>Show Now</OutLineButton>
                </div>
                <div className="slider__images">
                  <Image
                    preview={false}
                    alt="Banner picture"
                    src={silderImg1}
                  />
                  <Image
                    preview={false}
                    alt="Banner picture"
                    src={silderImg2}
                  />
                </div>
              </div>
            ))}
          </Carousel>
          <div className="slider__arrows">
            <button onClick={clickPrev}>
              <img src={LeftArrow} alt={"Arrow left"} />
            </button>
            <button onClick={clickNext}>
              <img src={RightArrow} alt={"Arrow right"} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Slider;
