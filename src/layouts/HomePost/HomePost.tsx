
import React from 'react'
import Title from '../../components/title/Title'
import './HomePost.scss'
import Card from '../../components/Cards/Card'
import ReusableSwiperSlider from '../../components/Slider/Slider'
import TueNhi1 from '../../assets/tuenhi/tuenhi1.jpg';
import TueNhi2 from '../../assets/tuenhi/tuenhi2.jpg';
import TueNhi3 from '../../assets/tuenhi/tuenhi3.jpg';
import TueNhi4 from '../../assets/tuenhi/tuenhicuahoa.jpg';
import TueNhi5 from '../../assets/tuenhi/tuenhicuahuan.jpg';
import TueNhi6 from '../../assets/tuenhi/tuenhicuahuuhuan.jpg';
import TueNhi7 from '../../assets/tuenhi/tuenhicuanguyenhuuhuan.jpg';
import { Button } from '../../components/button/Button'
const HomePost = () => {
    const images = [
        TueNhi1,
        TueNhi2,
        TueNhi3,
        TueNhi4,
        TueNhi5,
        TueNhi6,
        TueNhi7
    ];
    const textColorStyle: React.CSSProperties = {
        color: '#FFF'
    }
    const handleSlideClick = (index: number) => {
        console.log(`Slide ${index} clicked`);
    };

    return (
        <div className="w-[1520px] h-[892px] home-post flex  flex-col justify-around items-center gap-[10px]">
            <Title
                titleHeader='CHIA SẺ THÔNG TIN'
                titleContent='Bài viết mới'
                description='Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch'
                textColor={textColorStyle}
            />
            <div className="w-full flex justify-between px-[193px]">
                <Card 
                    src={TueNhi1} 
                    roleName='Admin' 
                    title='Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor' 
                    description='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...'
                    view={10000}
                    day='10/10/2024'
                />
                <Card 
                    src={TueNhi2} 
                    roleName='Admin' 
                    title='Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor' 
                    description='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...'
                    view={10000}
                    day='10/10/2024'
                />
                <Card 
                    src={TueNhi3} 
                    roleName='Admin' 
                    title='Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor' 
                    description='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...'
                    view={10000}
                    day='10/10/2024'
                />
            </div>
            <div className="">
                <Button label='Xem thêm bài viết' type='button'/>
            </div>
        </div>
    )
}

export default HomePost