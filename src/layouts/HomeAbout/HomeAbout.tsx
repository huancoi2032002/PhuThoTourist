import HomeAboutLeft from '../../components/ContentHome/HomeAboutLeft/HomeAboutLeft'
import HomeAboutRight from '../../components/ContentHome/HomeAboutRight/HomeAboutRight'
import './Styles.scss'
const HomeAbout = () => {
    return(
        <div className="w-[1520px] h-[701px] home-about flex justify-between items-center px-20">
            <HomeAboutLeft/>
            <HomeAboutRight/>
        </div>
    )
}

export default HomeAbout