import React, { useState } from 'react';
import './FilterSortMobile.scss';

interface FilterSortMobileProps {
    isOpen: boolean;
}

const FilterSortMobile: React.FC<FilterSortMobileProps> = ({ isOpen }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    
    const items = ["Từ A đến Z", "Cao đến thấp", "Thấp tới cao", "Cũ nhất", "Mới nhất"];

    return (
        <div className="w-full h-full bg-black/20 ">
            <div className={`flex flex-col items-start pb-[9px] gap-3 custom-filtersortmobile font-roboto ${isOpen ? 'open' : ''}`}>
                <div className="h-6 flex w-full justify-center items-center">
                    <div className="w-[54px] h-1 custom-line"></div>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    {items.map((text) => (
                        <div
                            key={text}
                            className={`w-full p-2 flex justify-center items-center cursor-pointer gap-[10px] ${selectedItem === text ? 'text-selected' : 'text-unselected'}`}
                            onClick={() => setSelectedItem(text)}
                        >
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterSortMobile;
