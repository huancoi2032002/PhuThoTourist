import React from "react";
import { TypeCard } from "../../../Store/Card/TypeCard";
import { EllipseIcon } from "../../../assets";
import NameTag from "../../NameTag/NameTag";
import './Styles.scss'

const PostCard: React.FC<TypeCard> = ({ src, title, roleName, view, day }) => {
    return (
        <div className="w-[265px] h-[292px] custom-postcard flex pb-[10px] flex-col items-center gap-3 overflow-hidden flex-shrink-0" >
            <div className="w-[265px] h-[146px] image-container">
                <img src={src} className="w-full h-full object-cover" alt="Description" />
                <div className="overlay">Click để xem</div> {/* Thêm lớp overlay */}
            </div>
            <div className="flex flex-col items-start gap-2 flex-shrink-0 ">
                <div className="flex items-center gap-1">
                    <span className="custom-span-admin-postcard font-roboto">{roleName}</span>
                    <EllipseIcon className="custom-fill-action" />
                </div>
                <h2 className="custom-h2-card-postcard font-roboto w-[241px] h-[38px] flex flex-col justify-center">{title}</h2>
                <div className="flex justify-start gap-1">
                    <NameTag label="Sự kiện" keywords="sukien" />
                    <NameTag label="Thông báo" keywords="thongbao" />
                    <NameTag label="Tin tức" keywords="tintuc" />
                </div>
                <div className="flex items-center gap-2 font-roboto">
                    <div className="flex items-center gap-1 custom-text-postcard">{view} lượt xem</div>
                    <EllipseIcon className="size-[3px] custom-fill" />
                    <div className="flex items-center gap-2 custom-text-postcard">{day}</div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
