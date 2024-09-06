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
            className={`flex xl:h-10 h-7 justify-center items-center gap-2 cursor-pointer rounded-[99px] custom-chips ${isClicked ? "bg-[#0054A6] text-[#FFF]" : "xl:bg-white text-[#4D4D4D] bg-[#E6EEF7]"}`}
            onClick={handleClick}
        >
            <span
                className="flex xl:h-10 px-3 justify-center items-center  font-roboto xl:text-sm text-xs"
            >
                {label}
            </span>
        </div>
    );
};

export default Chips;
