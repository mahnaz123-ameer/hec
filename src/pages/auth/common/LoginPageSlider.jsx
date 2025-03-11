import React, { useRef, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import sliderIMage1 from "@/assets/images/auth/slider-1.png";
import sliderImage2 from "@/assets/images/auth/slider-2.png";

export default function LoginPageSlider() { 
  return (
    <>
       <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={2}
            isIntrinsicHeight={true}
            orientation="horizontal"
            infinite={true}
            isPlaying={true}
            lockOnWindowScroll={true}
            dragFree={false}
            visibleSlides={1}
            className="w-full"
        >
            <Slider>
                <Slide index={0}>
                    <img src={sliderIMage1} alt="" />
                </Slide>
                <Slide index={1}>
                    <img src={sliderImage2} alt="" />
                </Slide>
            </Slider>
            {/* <DotGroup dotNumbers /> */}
        </CarouselProvider>
    </>
  );
}
