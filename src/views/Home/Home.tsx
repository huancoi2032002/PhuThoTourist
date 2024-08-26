
import Layout from "../../layouts/Layout";
import { HomeAboutLeft, HomeAboutRight, HomePost, HomeService, HomeSlider } from "../../components/ContentHome";
import { GroupDown } from "../../assets";


const Home = () => {
    const handleScroll = () => {
        const element = document.getElementById('scrollTarget');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <Layout>

            <div className="w-full flex flex-col items-center justify-center pt-[60px]">
                <div className="w-full ">
                    <HomeSlider />
                </div>
                <div className="animate-move-down cursor-pointer mb-[200px] mt-[-150px]" onClick={handleScroll}>
                    <GroupDown />
                </div>
                <div id="scrollTarget" className="w-[1520px] h-[701px] home-about flex justify-between items-center px-20 custom-bg-about">
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