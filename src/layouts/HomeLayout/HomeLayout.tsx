import Navigation from "../../components/Navigation/Navigation"
import { HomeAboutLeft, HomeAboutRight, HomePost, HomeService, HomeSlider } from "../../components/ContentHome"
import Footer from "../../components/Footer/Footer"

const HomeLayout = () => {
    return (
        <div className="w-full">
            <div className="w-full ">
                <Navigation />
            </div>
            <div>
                <HomeSlider />
            </div>
            <div className="w-[1520px] h-[701px] home-about flex justify-between items-center px-20">
                <HomeAboutLeft />
                <HomeAboutRight />
            </div>
            <div>
                <HomePost />
            </div>
            <div>
                <HomeService />
            </div>
            <Footer />
        </div>
    )
}

export default HomeLayout 