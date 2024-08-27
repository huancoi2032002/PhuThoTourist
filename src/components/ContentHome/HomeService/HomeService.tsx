import Title from '../../title/Title'
import React from 'react'
import TueNhi1 from '../../../assets/tuenhi/tuenhi1.jpg';
import TueNhi2 from '../../../assets/tuenhi/tuenhi2.jpg';
import TueNhi3 from '../../../assets/tuenhi/tuenhi3.jpg';
import NewsCard from '../../Cards/NewsCard/NewsCard';
import './Styles.scss'

const HomeService:React.FC = () => {
    const textColorStyle: React.CSSProperties = {
        color: '#4D4D4D'
    }
    
    return(
        <div className="xl:w-[1520px] w-[375px] flex  flex-col xl:justify-around items-center gap-[50px] py-[40px]">
            <Title
                titleHeader='LĨNH VỰC HOẠT ĐỘNG'
                titleContent='Các dịch vụ trọng tâm'
                description='3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng – khách sạn, và dịch vụ lữ hành'
                textColor={textColorStyle}
                width='xl:w-[220px] w-[80px]'
            />
            <div className="w-full flex justify-between xl:px-[193px] custom-list-newscard">
                <NewsCard  
                    src={TueNhi1}
                    title='Vui chơi giải trí'
                    description='Với 2 khu giải trí nổi tiếng TP.HCM là Công viên văn hóa Đầm Sen, và khu du lịch sinh thái Vàm Sát (H.Cần Giờ)...'
                /> 
                <NewsCard  
                    src={TueNhi2}
                    title='Nhà hàng – Khách sạn'
                    description='Với hệ thống khách sạn Phú Thọ và Ngọc Lan đạt chuẩn 3 sao, chuyên tiếp đón các đoàn thể thao....'
                /> 
                <NewsCard  
                    src={TueNhi3}
                    title='Dịch vụ Lữ hành'
                    description='Tổ chức các tour trong và ngoài nước với Trung tâm Dịch vụ du lịch Đầm Sen. Ngoài ra Trung tâm còn thế mạnh là tổ chức...'
                /> 
            </div>
        </div>
    )
}

export default HomeService