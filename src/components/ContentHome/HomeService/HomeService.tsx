import { useState, useEffect } from 'react';
import Title from '../../title/Title'
import React from 'react'
import NewsCard from '../../Cards/NewsCard/NewsCard';
import './Styles.scss'
import { fetchHomeService } from '../../../firebase';

const HomeService:React.FC = () => {
    const textColorStyle: React.CSSProperties = {
        color: '#4D4D4D'
    }
    const [homeService, setHomeService] = useState<any[]>([]);
    useEffect(() => {
        const loadHomeService = async () => {
            try {
                const homeServiceData = await fetchHomeService();
                setHomeService(homeServiceData); // Update the homeSlider state with fetched data
            } catch (error) {
                console.error("Error fetching homeService: ", error);
            }
        };

        loadHomeService();
    }, []);
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
                {
                    homeService.map(item => (
                        <NewsCard  
                        src={item.src}
                        title={item.title}
                        description={item.des}
                /> 
                    ))
                }
                
            </div>
        </div>
    )
}

export default HomeService