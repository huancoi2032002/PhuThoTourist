import './Styles.scss'
import RecTangLe1 from '../../../assets/rectangle/image1.png'
import RecTangLe2 from '../../../assets/rectangle/image2.png'


const HomeAboutRight = () => {
    return (
        <div className="custom-about-right grid">
            <div className="rectangle-1">
                <img src={RecTangLe1} />
            </div>
            <div className="rectangle-2">
                <img src={RecTangLe2} />
            </div>
        </div>
    )
}

export default HomeAboutRight