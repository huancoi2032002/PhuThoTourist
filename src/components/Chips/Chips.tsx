import React, { useState } from "react";
import './Styles.scss'
interface IChips {
    label: string;
    keyword?: string;
}

const Chips: React.FC<IChips> = ({ label }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked); // Toggle clicked state
    };

    return (
        <div
            className={`flex h-10 justify-center items-center gap-2 cursor-pointer rounded-[99px] ${isClicked ? "bg-[#0054A6] text-[#FFF]" : "bg-white text-[#4D4D4D]"}`}
            onClick={handleClick}
        >
            <span
                className="flex h-10 px-3 justify-center items-center  font-roboto text-sm"
            >
                {label}
            </span>
        </div>
    );
};

export default Chips;
