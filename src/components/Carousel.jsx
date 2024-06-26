"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = ({ data }) => {
  return (
    <Carousel slide={true}>
      {data.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div
            className={"carrousel_wrapper"}
            style={{ background: `url(/images/arts/${slide.name}) no-repeat` }}
          >
            <div>{slide.title}</div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
