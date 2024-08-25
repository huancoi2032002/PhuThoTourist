import React from "react";
import TueNhi from '../../../assets/tuenhi/tuenhi1.jpg';
import { TypeCard } from "../../../Store/Card/TypeCard";
import { EllipseIcon } from "../../../assets";
import './Styles.scss'



const MiniTag: React.FC<TypeCard> = ({ view, day, src, title }) => {
    return (
        <div className="w-[314px] h-[102px] flex bg-white rounded-[4px] custom-minitag flex-shrink-0 gap-[12px] overflow-hidden">
            <div className="w-[104px] h-[102px] flex-shrink-0">
                <img src={src} className="w-full h-full object-cover" />
            </div>
            <div className="w-auto h-auto flex flex-col items-start justify-center gap-[8px]">
                <h3 className="text-[#666] font-roboto text-[14px] font-bold">
                    {title}
                </h3>
                <div className="flex items-center gap-[8px] font-roboto">
                    <div className="flex items-center gap-[4px] custom-text">{view} lượt xem</div>
                    <EllipseIcon className="size-[3px] custom-fill" />
                    <div className="flex items-center gap-[8px] custom-text">{day}</div>
                </div>
            </div>
        </div>
    )
}

const NewsPost = () => {
    return (
        <div className="h-[603px] w-[362px] flex flex-col p-[24px] custom-bg-newspost rounded-[8px]">
            <div className="pb-[16px]">
                <h2 className="font-roboto text-[24px] font-bold text-[#0054A6]">Bài mới nhất</h2>
            </div>
            <div className="h-[520px] inline-flex flex-col items-start gap-4 scroll-newspost flex-shrink-0">
                <MiniTag day="24/08/20024" view={10000} title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" src={TueNhi} />
                <MiniTag day="24/08/20024" view={20000} title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" src={TueNhi} />
                <MiniTag day="24/08/20024" view={30000} title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" src={TueNhi} />
                <MiniTag day="24/08/20024" view={40000} title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" src={TueNhi} />
                <MiniTag day="24/08/20024" view={50000} title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" src={TueNhi} />
                <MiniTag day="24/08/20024" view={60000} title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" src={TueNhi} />
                <MiniTag day="24/08/20024" view={70000} title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" src={TueNhi} />
            </div>
        </div>
    )
}

export default NewsPost