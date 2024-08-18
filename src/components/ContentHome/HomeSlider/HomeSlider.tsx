import React from "react";
import './Styles.scss';
import ReusableSwiperSlider from "../../Swiper/Swiper";
import TueNhi1 from '../../../assets/tuenhi/tuenhi1.jpg';
import TueNhi2 from '../../../assets/tuenhi/tuenhi2.jpg';
import TueNhi3 from '../../../assets/tuenhi/tuenhi3.jpg';
import TueNhi4 from '../../../assets/tuenhi/tuenhicuahoa.jpg';
import TueNhi5 from '../../../assets/tuenhi/tuenhicuahuan.jpg';
import TueNhi6 from '../../../assets/tuenhi/tuenhicuahuuhuan.jpg';
import TueNhi7 from '../../../assets/tuenhi/tuenhicuanguyenhuuhuan.jpg';

const HomeSlider: React.FC = () => {
    const images = [
        TueNhi1,
        TueNhi2,
        TueNhi3,
        TueNhi4,
        TueNhi5,
        TueNhi6,
        TueNhi7
    ];

    const handleSlideClick = (index: number) => {
        console.log(`Slide ${index} clicked`);
    };

    const renderCustomSlide = (src: string, index: number) => (
        <div className="w-full">
            <img src={src} className="h-h-img-slider w-w-img-slider object-cover img-select" alt={`${index}`} />
        </div>
    );

    return (
        <div className="w-full flex items-center justify-center pt-[168px] pb-[222px] bg-headercontent">
            <div className="inline-flex flex-col items-center gap-[42px] h-auto flex-shrink-0">
                <div className="flex flex-col items-center gap-[24px]">
                    <h2 className="text-white text-center font-philosopher text-[30px] font-bold leading-[36px] text-shadow-custom-h2">
                        CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
                    </h2>
                    <h1 className="text-custom-light-blue text-shadow-custom-h1 font-helvetica text-[44px] font-bold leading-normal tracking-[1.76px]">
                        PHUTHOTOURIST
                    </h1>
                    <p className="text-white font-helvetica text-[24px] italic font-normal leading-[36px]">
                        Ngày thành lập 01/01/2019
                    </p>
                </div>
                <div className="w-w-slides flex justify-center items-center overflow-hidden">
                    <ReusableSwiperSlider
                        images={images}
                        slidesPerView={5}
                        spaceBetween={-70}
                        effectOptions={{
                            rotate: 45,
                            stretch: 0,
                            depth: 250,
                            modifier: 1,
                            slideShadows: true
                        }}
                        renderSlide={renderCustomSlide}
                        onClickSlide={handleSlideClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;
