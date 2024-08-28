import React, { useState, useEffect } from 'react';
import { CircleIcon, LogoDotIcon, NextIcon, PrevIcon } from '../../assets';
import TueNhi from '../../assets/tuenhi/tuenhi1.jpg';
import TueNhi1 from '../../assets/tuenhi/tuenhi2.jpg';
import TueNhi2 from '../../assets/tuenhi/tuenhi3.jpg';
import TueNhi3 from '../../assets/tuenhi/tuenhicuahoa.jpg';
import './Styles.scss';

const slides = [
    {
        id: 1,
        title: "Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng",
        description: "THÔNG BÁO MỜI CHÀO GIÁ CẠNH TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ tổ chức chào giá cạnh tranh lựa chọn đơn vị Cung cấp nước đá để chế tác Băng Đăng tại Công viên Văn hóa Đầm Sen.",
        image: TueNhi,
    },
    {
        id: 2,
        title: "Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng",
        description: "THÔNG BÁO MỜI CHÀO GIÁ CẠNH TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ tổ chức chào giá cạnh tranh lựa chọn đơn vị Cung cấp nước đá để chế tác Băng Đăng tại Công viên Văn hóa Đầm Sen.",
        image: TueNhi1,
    },
    {
        id: 3,
        title: "Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng",
        description: "THÔNG BÁO MỜI CHÀO GIÁ CẠNH TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ tổ chức chào giá cạnh tranh lựa chọn đơn vị Cung cấp nước đá để chế tác Băng Đăng tại Công viên Văn hóa Đầm Sen.",
        image: TueNhi2,
    },
    {
        id: 4,
        title: "Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng",
        description: "THÔNG BÁO MỜI CHÀO GIÁ CẠNH TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ tổ chức chào giá cạnh tranh lựa chọn đơn vị Cung cấp nước đá để chế tác Băng Đăng tại Công viên Văn hóa Đầm Sen.",
        image: TueNhi3,
    },
];

const SliderComponent: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrevClick = () => {
        if (isAnimating) return; // Ngăn chặn chuyển động khi animation đang diễn ra
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            setIsAnimating(false);
        }, 300); // Thời gian cần thiết để hoàn thành hiệu ứng chuyển động
    };

    const handleNextClick = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            setIsAnimating(false);
        }, 300);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 2000); // Tự động chuyển slide sau mỗi 5 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
    }, [isAnimating]);

    return (
        <div className="2xl:max-w-[1134px] 2xl:max-h-[604px] xl:w-[1110px] w-[343px]  xl:h-full h-[199px] flex-shrink-0 bg-[#FFF] xl:rounded-[20px] rounded-[4px] overflow-hidden">
            <div className="w-full xl:h-[386px] h-[132px] overflow-hidden">
                <div
                    className="w-full h-full transition-transform duration-300 ease-in-out "
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        display: 'flex',
                    }}
                >
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover flex-shrink-0 custom-img"
                            style={{ minWidth: '100%' }}
                        />
                    ))}
                </div>
            </div>
            <div className="xl:w-full flex justify-between xl:p-[20px] p-2">
                <div className="xl:w-[845px] w-[256px]  flex flex-col items-start gap-[24px] custom-detail">
                    <h1 className="font-philosopher font-bold leading-trim-both text-edge-cap custom-title">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="w-full font-roboto custom-des line-clamp-2 hidden md:block">
                        {slides[currentSlide].description}
                    </p>
                </div>
                <div className="flex flex-col h-full justify-between items-end custom-btn-slider">
                    <div className="inline-flex items-start gap-[4px]">
                        <div className="cursor-pointer" onClick={handlePrevClick}>
                            <PrevIcon className="custom-icon" />
                        </div>
                        <div className="cursor-pointer" onClick={handleNextClick}>
                            <NextIcon className="custom-icon" />
                        </div>
                    </div>
                    <div className="inline-flex xl:gap-[12px] gap-[4px]">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer ${index === currentSlide ? 'z-99' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            >
                                {index === currentSlide ? <LogoDotIcon className='w-4 h-2' /> : <CircleIcon className='size-2' />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Slider: React.FC = () => {
    return (
        <div>
            <SliderComponent />
        </div>
    );
};

export default Slider;