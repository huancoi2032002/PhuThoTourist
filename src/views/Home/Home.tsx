
import Layout from "../../layouts/Layout";
import { HomeAboutLeft, HomeAboutRight, HomePost, HomeService, HomeSlider } from "../../components/ContentHome";
import { GroupDown } from "../../assets";
import './Styles.scss'


const Home = () => {
    const handleScroll = () => {
        const element = document.getElementById('scrollTarget');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    //em dùng tailwind kết hợp với scss để cấu hình responsive
    return (
        <Layout>
            
            <div className="w-full flex flex-col items-center justify-center lg:pt-[60px]">
                <div className="w-full lg:pt-[168px] mt-[-120px]">
                    <HomeSlider />
                </div>
                <div className="animate-move-down cursor-pointer lg:mb-[200px] mb-10 lg:mt-[-150px] mt-[-380px]" onClick={handleScroll}>
                    <GroupDown />
                </div>
                <div id="scrollTarget" className="lg:w-[1520px] lg:h-[701px] home-about flex lg:justify-between items-center px-20 custom-bg-about">
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
        </Layout>
    )
}

export default Home