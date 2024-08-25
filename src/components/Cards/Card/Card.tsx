import React from "react";
import './Styles.scss'
import { EllipseIcon } from "../../../assets";
import NameTag from "../../NameTag/NameTag";
import { TypeCard } from "../../../Store/Card/TypeCard";



const Card: React.FC<TypeCard> = ({ src, roleName, title, description, view, day, showDetails, showRoles }) => {
    return (
        <div className="w-[362px] h-auto rounded-[12px] bg-white card-custom cursor-pointer">
            <div className="w-full h-[197px] image-container">
                <img src={src} className="w-full h-full object-cover rounded-t-[12px]" alt="Description" />
            </div>

            <div className="flex flex-col items-start flex-shrink-0 p-[16px] gap-[12px]">
                {showRoles && (
                    <div className="w-full h-full flex items-center gap-[4px]">
                        <span className="custom-span-admin font-roboto">{roleName}</span>
                        <EllipseIcon className="custom-fill-action" />
                    </div>
                )}
                <h2 className="custom-h2-card font-roboto">{title}</h2>
                <p className="custom-p-card font-roboto pt-[4px]">{description}</p>
            </div>
            {
                showDetails && (
                    <div className="flex flex-col items-start gap-[8px] px-[16px] py-[23px]">
                        <div className="flex justify-start gap-[4px]">
                            <NameTag label="Sự kiện" keywords="sukien" />
                            <NameTag label="Thông báo" keywords="thongbao" />
                            <NameTag label="Tin tức" keywords="tintuc" />
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <div className="flex items-center gap-[4px] custom-text">{view} lượt xem</div>
                            <EllipseIcon className="size-[3px] custom-fill" />
                            <div className="flex items-center gap-[8px] custom-text">{day}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card