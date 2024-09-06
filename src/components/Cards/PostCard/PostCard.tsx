import React from "react";
import { TypeCard } from "../../../Store/Card/TypeCard";
import { EllipseIcon } from "../../../assets";
import NameTag from "../../Tag/NameTag/NameTag";
import './Styles.scss';
import { useNavigate } from "react-router-dom";

const PostCard: React.FC<TypeCard> = ({ src, title, roleName, view, day }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/articles/articledetails', { state: { title } });
    };

    return (
        <div className="xl:w-[265px] w-[343px] xl:h-[292px] h-[402px] custom-postcard flex xl:pb-[10px] pb-3 flex-col items-center xl:gap-3 gap-2 overflow-hidden z-10" onClick={handleCardClick}>
            <div className="xl:w-[265px] w-[343px] xl:h-[146px] h-[190px] image-container">
                <img src={src} className="w-full h-full object-cover" alt={title} />
                <div className="overlay">Click để xem</div>
            </div>
            <div className="flex flex-col items-start xl:gap-2 gap-3 flex-shrink-0 custom-des-postcard">
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
    );
}

export default PostCard;
