import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import './Slider.scss';

SwiperCore.use([EffectCoverflow, Autoplay]);

interface ReusableSwiperSliderProps {
    images: string[];
    slidesPerView?: number;
    spaceBetween?: number;
    effectOptions?: {
        rotate: number;
        stretch: number;
        depth: number;
        modifier: number;
        slideShadows: boolean;
    };
    renderSlide: (src: string, index: number) => React.ReactNode;
    onClickSlide?: (index: number) => void;
}

const ReusableSwiperSlider: React.FC<ReusableSwiperSliderProps> = ({
    images,
    slidesPerView = 5,
    spaceBetween = -70,
    effectOptions = {
        rotate: 45,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: true
    },
    renderSlide,
    onClickSlide = () => { }
}) => {
    const swiperRef = useRef<SwiperCore | null>(null); // Ref to access Swiper instance

    const handleClick = (index: number) => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            const loopedSlides = swiper.loopedSlides || 0;
            const slides = swiper.slides.length;
            const actualIndex = (index + loopedSlides) % slides;
            swiper.slideTo(actualIndex, 300);
            onClickSlide(index); // Call the external onClickSlide function
        }
    };

    return (
        <div className="w-w-slider flex items-center justify-center relative">
            <Swiper
                ref={swiperRef}
                effect="coverflow"
                coverflowEffect={effectOptions}
                slidesPerView={slidesPerView}
                centeredSlides
                spaceBetween={spaceBetween}
                loop={true}
                slideToClickedSlide={true} // Enable slide to clicked slide
                className="mySwiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} onClick={() => handleClick(index)}>
                        {renderSlide(src, index)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ReusableSwiperSlider;
