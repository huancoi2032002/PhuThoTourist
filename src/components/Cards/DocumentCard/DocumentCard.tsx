import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeCard } from '../../../Store/Card/TypeCard';
import { File } from '../../../assets';
import './Styles.scss';

const DocumentCard: React.FC<TypeCard> = ({ src, title }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/articles/articledetails', { state: { title } });
    };

    return (
        <div
            onClick={handleCardClick}
            className="xl:w-[177px] w-[102px] xl:h-[261px] h-[153px] flex-shrink-0 rounded-xl overflow-hidden custom-document-card relative cursor-pointer"
        >
            <img src={src} className="w-full h-full object-cover custom-img-document-card" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130px] h-[138px] flex px-1 flex-col justify-center items-center z-10">
                <File className="custom-icon-file" />
                <span className="flex xl:h-[33.735px] h-[24px] justify-center items-center xl:text-sm text-[10px] text-[#FFF] text-center font-bold">
                    {title}
                </span>
            </div>
            <div className="overlay">Click để xem</div>
        </div>
    );
};

export default DocumentCard;
