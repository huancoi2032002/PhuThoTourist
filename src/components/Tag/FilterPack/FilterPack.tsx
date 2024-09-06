import React, {ReactNode} from "react";
import { LightBuldIcon, NewsIcon, EventIcon, BellIcon, GroupIcon } from "../../../assets/iconpack";
import './Styles.scss'

type FilterPackProps = {
    label: string;
    icon: ReactNode;
    selected?: boolean;
    onClick?: () => void;

};



export const FilterPack: React.FC<FilterPackProps> = ({ label, icon, selected = false, onClick }) => {
    return (
        <div
            className={`flex xl:w-[322px] xl:p-5 p-3 items-center gap-3 rounded-lg cursor-pointer filterpack-custom 
                ${selected ? 'bg-[#0054A6] text-white hover:text-white' : 'bg-[#FFF] text-[#6698CA] hover:text-blue-500'}`
            }
            onClick={onClick}
        >
            <div className="flex size-6 justify-center items-center flex-shrink-0">
                <div className={`icon ${selected ? 'fill-[#FFF] stroke-[#FFF]' : 'fill-blue-500 stroke-[#0054A6]'}`}>
                    {icon}
                </div>
            </div>
            <p className={`xl:text-xl text-sm font-semibold`}>
                {label}
            </p>
        </div>
    );
};