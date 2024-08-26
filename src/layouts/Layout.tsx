import React from 'react';
import VideoBackground from "./../components/VideoBackground/VideoBackground";
import Navigation from "./../components/Navigation/Navigation";
import Footer from "./../components/Footer/Footer";
import './Styles.scss';


type ILayoutProps = {
    children?: React.ReactNode;
};

const Layout: React.FC<ILayoutProps> = ({ children }) => {


    return (
        <div className="w-full relative scroll-container">
            <VideoBackground />
            <div className="fixed-nav z-30">
                <Navigation />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mb-12">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
