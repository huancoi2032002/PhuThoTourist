import React from 'react';
import { TypeCard } from '../../../Store/Card/TypeCard';
import { File } from '../../../assets';
import './Styles.scss'



const DocumentCard:React.FC<TypeCard> = ({src, title}) => {
    return (
        <div className="w-[177px] h-[261px] flex-shrink-0 rounded-xl overflow-hidden custom-document-card relative cursor-pointer">
            <img src={src} className="w-full h-full object-cover custom-img-document-card" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130px] h-[138px] flex px-1 flex-col justify-center items-center z-10">
                <File />
                <span className="flex h-[33.735px] justify-center items-center text-sm text-[#FFF] text-center font-bold">{title}</span>
            </div>
            <div className="overlay">Click để xem</div>
        </div>


    )
}

export default DocumentCard