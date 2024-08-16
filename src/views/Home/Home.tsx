
import Navigation from "../../components/Navigation/Navigation"
import HeaderContent from "../../layouts/HeaderContent/HeaderContent"
import HomeAbout from "../../layouts/HomeAbout/HomeAbout"
import HomePost from "../../layouts/HomePost/HomePost"

const Home = () => {
    return(
        <div className="w-full flex flex-col justify-center items-center">
            <Navigation />
            <HeaderContent />
            <HomeAbout />
            <HomePost />
        </div>
    )
}

export default Home