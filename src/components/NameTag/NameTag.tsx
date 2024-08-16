import React from "react";
import './Styles.scss'

type NameTagProps = {
    label: string;
    keywords: string;

};


const NameTag: React.FC<NameTagProps> = ({ label, keywords}) => {
    return (
        <div
            className="flex justify-center items-center px-[12px] py-[8px] custom-NameTag cursor-pointer w-auto h-auto"
        >
            <div className="custom-label-NameTag font-roboto">{label}</div>
        </div>
    );
};

export default NameTag;
