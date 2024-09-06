import React, { useEffect, useState } from "react";
import './Styles.scss';
import ReusableSwiperSlider from "../../Swiper/Swiper";
import { fetchHomeSlider } from "../../../firebase";

const HomeSlider: React.FC = () => {
    const [homeSlider, setHomeSlider] = useState<any[]>([]);

    useEffect(() => {
        const loadHomeSlider = async () => {
            try {
                const slidesData = await fetchHomeSlider();
                setHomeSlider(slidesData); // Update the homeSlider state with fetched data
            } catch (error) {
                console.error("Error fetching slides: ", error);
            }
        };

        loadHomeSlider();
    }, []);

    const handleSlideClick = (index: number) => {
        console.log(`Slide ${index} clicked`);
    };

    const renderCustomSlide = (src: string, index: number) => (
        <div key={index} className="w-full">
            <img src={src} className="lg:h-h-img-slider lg:w-w-img-slider h-[310px] w-[220px] object-cover img-select" alt={`Slide ${index}`} />
        </div>
    );

    return (
        <div className="w-full flex items-center justify-center pb-[222px] bg-headercontent">
            <div className="inline-flex flex-col items-center gap-[42px] h-auto flex-shrink-0">
                <div className="flex flex-col items-center lg:gap-[24px] gap-3">
                    <h2 className="text-white text-center font-philosopher lg:text-[30px] text-[14px] font-bold leading-[36px] text-shadow-custom-h2">
                        CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
                    </h2>
                    <h1 className="text-custom-light-blue text-shadow-custom-h1 font-helvetica lg:text-[44px] text-[24px] font-bold leading-normal tracking-[1.76px]">
                        PHUTHOTOURIST
                    </h1>
                    <p className="text-white font-helvetica lg:text-[24px] text-[14px] italic font-normal leading-[36px]">
                        Ngày thành lập 01/01/2019
                    </p>
                </div>
                <div className="lg:w-w-slides flex justify-center items-center overflow-hidden">
                    {homeSlider.length > 0 && (
                        <ReusableSwiperSlider
                            images={homeSlider.map(image => image.link)} // Pass all the image links to the slider
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;
