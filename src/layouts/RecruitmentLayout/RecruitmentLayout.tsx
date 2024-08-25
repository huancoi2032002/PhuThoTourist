import React from 'react';
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import RectangleTitle from '../../components/Rectangles/RectangleTitle/RectangleTitle';
import './Styles.scss';


type IDocumentLayoutProps = {
    children?: React.ReactNode;
};

const DocumentLayout: React.FC<IDocumentLayoutProps> = ({ children }) => {


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
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[1520px] flex items-start gap-6">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DocumentLayout;
