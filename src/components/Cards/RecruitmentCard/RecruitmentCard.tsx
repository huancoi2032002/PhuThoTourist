import React from 'react';
import './Styles.scss';
import { LogoRecruitment } from '../../../assets/Logo';
import { Clock, MapIcon } from '../../../assets';
import { Button } from '../../button/Button';
import StatusComponent from '../../Tag/StatusComponent/StatusComponent';

interface IRecruitmentCard {
    title: string
    position: string
    location: string
    date: string
    des: string
    status: string
}



const RecruitmentCard: React.FC<IRecruitmentCard> = ({title, position, location, date, des, status}) => {
    return (
        <div className="xl:w-[362px] w-[343px] xl:h-[296px] h-[276px] bg-white rounded-xl flex flex-col justify-between flex-shrink-0">
            <div className="inline-flex items-center gap-3">
                <LogoRecruitment />
                <div className="flex flex-col items-start font-roboto gap-2">
                    <h2 className="custom-title-recruitment">{title}</h2>
                    <p className="custom-position-recruitment">{position}</p>
                </div>
            </div>
            <div className="flex justify-between pl-[84px] px-5">
                <div className="inline-flex flex-col items-start gap-2">
                    <div className="flex items-center gap-1">
                        <MapIcon className="w-4 h-4 fill-[#A3A3A3]" />
                        <span className="custom-location-recruitment font-roboto">{location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock />
                        <span className="custom-location-recruitment font-roboto">{date}</span>
                    </div>
                </div>
                <StatusComponent size={1} status={status as 'Đang tuyển' | 'Đã hết hạn'} />
            </div>
            <div className="inline-flex h-[92px] flex-col items-start gap-2 px-5 flex-shrink-0">
                <h2 className="font-roboto xl:text-base text-sm font-semibold text-[#0054A6]">Mô tả công việc:</h2>
                <p className="custom-des-recruitment font-roboto">{des}</p>
            </div>
            <div className="px-5 pb-5">
                <Button type='button' label='Xem chi tiết' />
            </div>
        </div>
    )
}

export default RecruitmentCard