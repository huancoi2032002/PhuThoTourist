import React, { ReactNode, useState, useEffect } from "react";
import './Styles.scss'
import { BellIcon, Ellipse2Icon, EventIcon, GroupIcon, LightBuldIcon, NewsIcon } from "../../../../assets/iconpack";

type FilterPackProps = {
    label: string;
    icon: ReactNode;
    selected?: boolean;
    onClick?: () => void;
};

const FilterPack: React.FC<FilterPackProps> = ({ label, icon, selected: defaultSelected = false, onClick }) => {
    const [selected, setSelected] = useState(defaultSelected);

    useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);

    const handleClick = () => {
        setSelected(!selected);
        if (onClick) onClick();
    };

    return (
        <div
            className={`flex w-[322px] p-5 items-center gap-3 rounded-lg cursor-pointer filterpack-custom ${selected ? 'bg-[#0054A6]' : 'bg-[#FFF]'}`}
            onClick={handleClick}
        >
            <div className="flex size-6 justify-center items-center flex-shrink-0">
                <div className={`icon ${selected ? 'fill-[#FFF] stroke-[#FFF]' : 'fill-[#0054A6] stroke-[#0054A6]'}`}>
                    {icon}
                </div>
            </div>
            <p className={`text-xl font-semibold ${selected ? 'text-[#FFF]' : 'text-[#6698CA]'}`}>{label}</p>
        </div>
    );
};

const FilterPackCol = () => {
    const [selectedLabel, setSelectedLabel] = useState("Giới thiệu");

    return (
        <div className="w-[362px] h-[1028px] custom-bg-filterpackcol flex-shrink-0 p-5">
            <div className="px-6 flex items-center justify-center pb-4">
                <span className="custom-title-packs font-philosopher">Chủ đề bài viết</span>
            </div>
            <div className="inline-flex flex-col items-start gap-5">
                <FilterPack
                    label="Giới thiệu"
                    icon={<LightBuldIcon />}
                    selected={selectedLabel === "Giới thiệu"}
                    onClick={() => setSelectedLabel("Giới thiệu")}
                />
                <FilterPack
                    label="Tin tức"
                    icon={<NewsIcon />}
                    selected={selectedLabel === "Tin tức"}
                    onClick={() => setSelectedLabel("Tin tức")}
                />
                <FilterPack
                    label="Sự kiện"
                    icon={<EventIcon />}
                    selected={selectedLabel === "Sự kiện"}
                    onClick={() => setSelectedLabel("Sự kiện")}
                />
                <FilterPack
                    label="Thông báo"
                    icon={<BellIcon />}
                    selected={selectedLabel === "Thông báo"}
                    onClick={() => setSelectedLabel("Thông báo")}
                />
                <FilterPack
                    label="Tin cổ đông"
                    icon={<NewsIcon />}
                    selected={selectedLabel === "Tin cổ đông"}
                    onClick={() => setSelectedLabel("Tin cổ đông")}
                />
                <FilterPack
                    label="Hoạt động đoàn thể"
                    icon={<GroupIcon />}
                    selected={selectedLabel === "Hoạt động đoàn thể"}
                    onClick={() => setSelectedLabel("Hoạt động đoàn thể")}
                />
            </div>
            <Ellipse2Icon />
        </div>
    )
}

export default FilterPackCol;
