import React, { ReactNode, useState, useEffect } from "react";
import './Styles.scss';
import { BellIcon, Ellipse2Icon, EventIcon, GroupIcon, LightBuldIcon, NewsIcon } from "../../../../assets/iconpack";

type FilterPackProps = {
    label: string;
    icon: ReactNode;
    selected?: boolean;
    onClick?: () => void;

};

const sidebarItems = [
    {
        title: 'Giới thiệu',
        icon: <LightBuldIcon />,
    },
    {
        title: 'Tin tức',
        icon: <NewsIcon />,
    },
    {
        title: 'Sự kiện',
        icon: <EventIcon />,
    },
    {
        title: 'Thông báo',
        icon: <BellIcon />,
    },
    {
        title: 'Tin cổ đông',
        icon: <NewsIcon />,
    },
    {
        title: 'Hoạt động đoàn thể',
        icon: <GroupIcon />,
    },
];

const FilterPack: React.FC<FilterPackProps> = ({ label, icon, selected = false, onClick }) => {
    return (
        <div
            className={`flex 2xl:w-[322px] w-[302px] 2xl:p-5 p-3 items-center gap-3 rounded-lg cursor-pointer filterpack-custom 
                ${selected ? 'bg-[#0054A6] text-white hover:text-white' : 'bg-[#FFF] text-[#6698CA] hover:text-blue-500'}`
            }
            onClick={onClick}
        >
            <div className="flex size-6 justify-center items-center flex-shrink-0">
                <div className={`icon ${selected ? 'fill-[#FFF] stroke-[#FFF]' : 'fill-blue-500 stroke-[#0054A6]'}`}>
                    {icon}
                </div>
            </div>
            <p className={`text-xl font-semibold`}>
                {label}
            </p>
        </div>
    );
};
interface IFilterPack {
    className?: string
}
const FilterPackCol:React.FC<IFilterPack> = ({className}) => {
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

    const handleItemClick = (label: string) => {
        setSelectedLabels(prevSelected => {
            if (prevSelected.includes(label)) {
                return prevSelected.filter(item => item !== label);
            } else {
                return [...prevSelected, label];
            }
        });
    };

    return (
        <div className={`2xl:w-[362px] h-[1028px] custom-bg-filterpackcol flex-shrink-0 p-5 ${className}`}>
            <div className="px-6 flex items-center justify-center pb-4">
                <span className="custom-title-packs font-philosopher">Chủ đề bài viết</span>
            </div>
            <div className="inline-flex flex-col items-start gap-5">
                {sidebarItems.map(item => (
                    <FilterPack
                        key={item.title}
                        label={item.title}
                        icon={item.icon}
                        selected={selectedLabels.includes(item.title)}
                        onClick={() => handleItemClick(item.title)}
                    />
                ))}
            </div>
            <Ellipse2Icon />
        </div>
    );
};

export default FilterPackCol;
