import Navigation from "../../components/Navigation/Navigation";
import { HomeAboutLeft, HomeAboutRight, HomePost, HomeService, HomeSlider } from "../../components/ContentHome";
import Footer from "../../components/Footer/Footer";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import './Styles.scss';

const HomeLayout = () => {
    return (
        <div className="w-full relative">
            <VideoBackground />
            <div className="fixed-nav z-30">
                <Navigation />
            </div>
            <div className="scroll-container">
                <div className="w-full flex flex-col items-center justify-center pt-[60px]">
                    <div className="w-full ">
                        <HomeSlider />
                    </div>
                    <div className="w-[1520px] h-[701px] home-about flex justify-between items-center px-20 custom-bg-about">
                        <HomeAboutLeft />
                        <HomeAboutRight />
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <HomePost />
                    </div>
                    <div className="custom-bg-service">
                        <HomeService />
                    </div>
                </div>
                <Footer />
            </div>
            
        </div>
    );
}

export default HomeLayout;
