import React, { useState } from 'react';
import './FilterSettingMobile.scss';
import { LightBuldIcon, NewsIcon, EventIcon, BellIcon, GroupIcon } from '../../../assets/iconpack';
import { FilterPack } from '../../Tag/FilterPack/FilterPack';
import { Button } from '../../button/Button';
import DatePicker from '../FilterDate/DatePicker';
import { useLocation } from 'react-router-dom';

interface FilterSettingMobileProps {
    isOpen: boolean;
    onClose: () => void;
}

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

const FilterSettingMobile: React.FC<FilterSettingMobileProps> = ({ isOpen, onClose }) => {
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
    const location = useLocation(); // Get the current path

    const handleItemClick = (label: string) => {
        setSelectedLabels(prevSelected =>
            prevSelected.includes(label)
                ? prevSelected.filter(item => item !== label)
                : [...prevSelected, label]
        );
    };

    // Conditionally render the section based on the current path
    const shouldShowFilter = location.pathname === '/articles';

    return (
        <div className={`flex flex-col items-start pb-[9px] gap-3 px-6 custom-filtersettingmobile font-roboto ${isOpen ? 'open' : ''}`}>
            <div className="h-6 flex w-full justify-center items-center">
                <div className="w-[54px] h-1 custom-line"></div>
            </div>

            {/* Conditionally render the filter section */}
            {shouldShowFilter && (
                <div className="w-full flex flex-col justify-center items-start gap-3">
                    <h2 className="text-[#0054A6] text-sm font-semibold">Chủ đề bài viết</h2>
                    <div className="w-[327px] flex flex-col items-start gap-2 flex-wrap">
                        <div className="w-full h-auto flex items-start gap-2">
                            {sidebarItems.slice(0, 2).map(item => (
                                <FilterPack
                                    key={item.title}
                                    label={item.title}
                                    icon={item.icon}
                                    selected={selectedLabels.includes(item.title)}
                                    onClick={() => handleItemClick(item.title)}
                                />
                            ))}
                        </div>
                        <div className="w-full h-auto flex items-start gap-2">
                            {sidebarItems.slice(2, 4).map(item => (
                                <FilterPack
                                    key={item.title}
                                    label={item.title}
                                    icon={item.icon}
                                    selected={selectedLabels.includes(item.title)}
                                    onClick={() => handleItemClick(item.title)}
                                />
                            ))}
                        </div>
                        <div className="w-full h-auto flex items-start gap-2">
                            {sidebarItems.slice(4, 6).map(item => (
                                <FilterPack
                                    key={item.title}
                                    label={item.title}
                                    icon={item.icon}
                                    selected={selectedLabels.includes(item.title)}
                                    onClick={() => handleItemClick(item.title)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full flex flex-col justify-center items-start gap-3">
                <h2 className="text-[#0054A6] text-sm font-semibold">Thời gian</h2>
                <DatePicker />
            </div>
            <div className="w-[327px] h-10 flex justify-center items-start gap-4 mb-6">
                <Button type="button" label="Hủy" variant="secondary" onClick={onClose} />
                <div className="w-[221px]">
                    <Button type="button" label="Xác nhận" onClick={onClose} />
                </div>
            </div>
        </div>
    );
};

export default FilterSettingMobile;
