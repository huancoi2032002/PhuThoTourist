
import React from 'react'
import Title from '../../title/Title'
import './Styles.scss'
import Card from '../../Cards/Card'
import TueNhi1 from '../../../assets/tuenhi/tuenhi1.jpg';
import TueNhi2 from '../../../assets/tuenhi/tuenhi2.jpg';
import TueNhi3 from '../../../assets/tuenhi/tuenhi3.jpg';
import { Button } from '../../button/Button'


const HomePost = () => {
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
                width='130px'
            />
            <div className="w-full flex justify-between px-[193px]">
                <Card
                    src={TueNhi1}
                    roleName='Admin'
                    title='Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor'
                    description='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...'
                    view={10000}
                    day='10/10/2024'
                    showRoles={true}
                    showDetails={true}
                />
                <Card
                    src={TueNhi2}
                    roleName='Admin'
                    title='Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor'
                    description='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...'
                    view={10000}
                    day='10/10/2024'
                    showRoles={true}
                    showDetails={true}
                />
                <Card
                    src={TueNhi3}
                    roleName='Admin'
                    title='Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor'
                    description='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...'
                    view={10000}
                    day='10/10/2024'
                    showRoles={true}
                    showDetails={true}
                />
            </div>
            <div className="">
                <Button label='Xem thêm bài viết' type='button' />
            </div>
        </div>
    )
}

export default HomePost