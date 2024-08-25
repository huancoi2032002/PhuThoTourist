import React, { useState } from "react";
import { SortIcon } from "../../../assets/iconpack";

type ISort = {
    label: string;
    keyword: string;
};

const sortOptions: ISort[] = [
    { label: "A đến Z", keyword: "az" },
    { label: "Mới nhất", keyword: "newest" },
    { label: "Cũ nhất", keyword: "oldest" }
];

const TypeSort: React.FC<ISort> = ({ label }) => {
    return (
        <div className="w-[75px] h-full flex items-center text-start flex-shrink-0">
            <label className="text-[#666] font-roboto text-lg font-semibold cursor-pointer">
                {label}
            </label>
        </div>
    );
};

const FilterSort: React.FC = () => {
    const [currentSortIndex, setCurrentSortIndex] = useState(0);

    const handleSortClick = () => {
        setCurrentSortIndex((prevIndex) => (prevIndex + 1) % sortOptions.length);
    };

    const currentSort = sortOptions[currentSortIndex];

    return (
        <div
            className="w-auto flex items-center gap-2 cursor-pointer"
            onClick={handleSortClick}
        >
            <SortIcon />
            <TypeSort label={currentSort.label} keyword={currentSort.keyword} />
        </div>
    );
};

export default FilterSort;
