import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settings = {
        dots: true,
    };

    const slides = [
        {
            title: "Lessons and insights ",
            description:
                "Where to grow your business as a photographer: site or social media?",
            buttonLabel: "Register",
        },
        {
            title: "Lessons and insights",
            description:
                "Where to grow your business as a photographer: site or social media?",
            buttonLabel: "Register",
        },
        {
            title: "Lessons and insights",
            description:
                "Where to grow your business as a photographer: site or social media?",
            buttonLabel: "Register",
        },
    ];

    return (
        <div className="mt-[160px] mb-[100px]">
            <Slider {...settings} className="">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className=" justify-center flex w-[1400px] m-auto"
                    >
                        <div className="w-[1200px] flex gap-[104px] m-auto mb-[50px]">
                            <div className="mb-[160px]">
                                <h1 className="w-[670px] text-[64px] font-[600] text-[#4D4D4D] leading-[76px]">
                                    {slide.title}
                                    <span className="text-[#4CAF4F] -mt-[10px]">
                                        from 8 years
                                    </span>
                                </h1>
                                <p className="text-[16px] font-[400] text-[#717171] font-inter mt-[16px]">
                                    {slide.description}
                                </p>
                                <button className=" p-4 px-12 mt-[32px] rounded-[4px] bg-[#4CAF4F] text-white font-[500] text-[16px] leading-6">
                                    {slide.buttonLabel}
                                </button>
                            </div>
                            <div className="bg-hero-pattern  w-[430px] bg-no-repeat bg-cover"></div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroCarousel;
