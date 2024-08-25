

import React from 'react'
import './Styles.scss'
import { LogoRecruitment } from '../../../assets/Logo'
import { Clock, MapIcon } from '../../../assets'
import Chips from '../../Chips/Chips'
import { Button } from '../../button/Button'

interface IRecruitmentCard {
    title: string
    position: string
    location: string
    date: string
    des: string
    status: string
}


interface IStatusComponentProps {
    status: 'Đang tuyển' | 'Đã hết hạn';
}

const StatusComponent: React.FC<IStatusComponentProps> = ({ status }) => {
    // Define styles based on the status
    const statusStyles = status === 'Đang tuyển'
        ? {
            backgroundColor: 'var(--green-green-50, #E6F7E6)',
            color: 'var(--green-green-500, #03A600)',
        }
        : {
            backgroundColor: '#F7E6E6',
            color: '#FF3939',
        };

    return (
        <div className="custom-status" style={{ backgroundColor: statusStyles.backgroundColor }}>
            <span className="font-roboto text-sm font-semibold" style={{ color: statusStyles.color }}>
                {status}
            </span>
        </div>
    );
};

const RecruitmentCard: React.FC<IRecruitmentCard> = ({title, position, location, date, des, status}) => {
    return (
        <div className="w-[362px] h-[296px] bg-white rounded-xl flex flex-col justify-between flex-shrink-0">
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
                <StatusComponent status={status as 'Đang tuyển' | 'Đã hết hạn'} />
            </div>
            <div className="inline-flex h-[92px] flex-col items-start gap-2 px-5 flex-shrink-0">
                <h2 className="font-roboto text-base font-semibold text-[#0054A6]">Mô tả công việc:</h2>
                <p className="custom-des-recruitment font-roboto">{des}</p>
            </div>
            <div className="px-5 pb-5">
                <Button type='button' label='Xem chi tiết' />
            </div>
        </div>
    )
}

export default RecruitmentCard