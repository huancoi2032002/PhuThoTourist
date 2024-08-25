import React from 'react';
import Slider from "../../components/Sliders/Slider";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import NewsPost from "../../components/ContentPost/NewsPost/NewsPost";
import RectangleTitle from "../../components/Rectangles/RectangleTitle/RectangleTitle";
import FilterPackCol from "../../components/Filter/FiltersPacks/FilterPackCol/FilterPackCol";
import FilterPackRow from "../../components/Filter/FiltersPacks/FilterPackRow/FilterPackRow";
import './Styles.scss'

type IArticlesLayoutProps = {
    children?: React.ReactNode;
};

const ArticlesLayout: React.FC<IArticlesLayoutProps> = ({ children }) => {
    return (
        <div className="w-full relative scroll-container">
            <VideoBackground />
            <div className="fixed-nav z-30">
                <Navigation />
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-32 '>
                <RectangleTitle label="BÀI VIẾT" />
            </div>
            <div className=" mb-12">

                <div className="w-full flex flex-col items-center justify-center gap-6">

                    <div className="max-w-[1520px] w-full flex justify-between">
                        <Slider />
                        <NewsPost />
                    </div>
                    <div className="max-w-[1520px] w-full h-[1108px]  flex justify-between flex-shrink-0">
                        <FilterPackCol />
                        <div className="flex flex-col gap-[22px]">
                            <FilterPackRow />
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ArticlesLayout;
