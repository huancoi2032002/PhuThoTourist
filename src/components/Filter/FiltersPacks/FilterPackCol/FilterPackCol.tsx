import React, { useState } from "react";
import './Styles.scss';
import { BellIcon, EventIcon, GroupIcon, LightBuldIcon, NewsIcon } from "../../../../assets/iconpack";
import { FilterPack } from "../../../Tag/FilterPack/FilterPack";

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
interface IFilterPack {
    className?: string
}
const FilterPackCol: React.FC<IFilterPack> = ({ className }) => {
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
            <div className="absolute bottom-[-28px] right-[-188px]">
                <div className="w-[440.7px] h-[280.8px] flex flex-shrink-0 relative opacity-15">
                    <svg className="relative" xmlns="http://www.w3.org/2000/svg" width="253" height="253" viewBox="0 0 253 256" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M141.323 275.821C215.576 275.821 275.77 215.627 275.77 141.374C275.77 67.1209 215.576 6.92679 141.323 6.92679C67.0694 6.92679 6.87527 67.1209 6.87527 141.374C6.87527 215.627 67.0694 275.821 141.323 275.821ZM141.323 282.148C219.07 282.148 282.097 219.122 282.097 141.374C282.097 63.6266 219.07 0.599854 141.323 0.599854C63.5751 0.599854 0.54834 63.6266 0.54834 141.374C0.54834 219.122 63.5751 282.148 141.323 282.148Z" fill="white" />
                    </svg>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="253" height="253" viewBox="0 0 253 256" fill="none">
                        <path d="M282.097 141.374C282.097 219.122 219.07 282.148 141.323 282.148C63.5751 282.148 0.54834 219.122 0.54834 141.374C0.54834 63.6266 63.5751 0.599854 141.323 0.599854C219.07 0.599854 282.097 63.6266 282.097 141.374Z" fill="#0054A6" />
                    </svg>
                    <svg
                        className="absolute left-1/2 top-1/2 transform -translate-y-1/2"
                        style={{ transform: 'translateX(-90%) translateY(-50%)' }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="335"
                        height="97"
                        viewBox="0 0 335 97"
                        fill="none"
                    >
                        <path
                            d="M159.971 1.62256L1.6001 86.0871L137.095 43.8549L283.149 94.8855L443.279 10.421L306.024 54.4129L159.971 1.62256Z"
                            fill="white"
                            stroke="#0054A6"
                            strokeWidth="3.16347"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default FilterPackCol;
