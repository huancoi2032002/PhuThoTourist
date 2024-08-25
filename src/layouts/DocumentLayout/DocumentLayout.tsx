import React from 'react';
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import RectangleTitle from '../../components/Rectangles/RectangleTitle/RectangleTitle';
import './Styles.scss';
import DocumentCard from '../../components/Cards/DocumentCard/DocumentCard';
import TueNhi from '../../assets/tuenhi/tuenhilove.jpg';
import { GroupDown } from '../../assets';

type IDocumentLayoutProps = {
    children?: React.ReactNode;
};

const DocumentLayout: React.FC<IDocumentLayoutProps> = ({ children }) => {
    const handleScroll = () => {
        const element = document.getElementById('scrollTarget');
        if (element) { 
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full relative scroll-container">
            <VideoBackground />
            <div className="fixed-nav z-30">
                <Navigation />
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-32'>
                <RectangleTitle label="BÀI VIẾT" />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mb-12">
                <div className="inline-flex flex-col items-start gap-[22px]">
                    <div className="flex h-[261px] justify-center items-start gap-[22px]">
                        <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                        <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                        <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                        <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                    </div>
                    <div className="flex h-[261px] justify-center items-start gap-[22px]">
                        <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                        <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                        <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                        <DocumentCard src={TueNhi} title="Báo cáo Tài Chính năm 2022-2023" />
                    </div>
                </div>
                <div className="animate-move-down cursor-pointer mb-[200px]" onClick={handleScroll}>
                    <GroupDown />
                </div>
                <div
                    id="scrollTarget"
                    className="w-full h-full flex items-center justify-center"
                >
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DocumentLayout;
