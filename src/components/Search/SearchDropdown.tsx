import React from "react";
import { Vector } from "../../assets/iconpack";

type SearchDropdownProps = {
    recentSearches: string[];
    onSearchClick: (searchTerm: string) => void;
    onDeleteClick: (searchTerm: string) => void;
};

const SearchDropdown: React.FC<SearchDropdownProps> = ({ recentSearches, onSearchClick, onDeleteClick }) => {
    return (
        <div className="w-full absolute left-0 right-0 top-[64px] bg-white border border-gray-200 rounded-md shadow-md z-50">
            <div className="p-4 font-bold border-b border-gray-100">
                Tìm kiếm gần đây
            </div>
            <ul className="list-none p-4">
                {recentSearches.length > 0 ? (
                    recentSearches.map((search, index) => (
                        <li
                            key={index}
                            className="py-2 hover:bg-gray-100 flex items-center justify-between"
                        >
                            <div
                                className="flex items-start cursor-pointer w-full"
                                onMouseDown={() => onSearchClick(search)}
                            >
                                {search}
                            </div>
                            <div
                                className="w-6 h-6 flex items-center justify-center cursor-pointer"
                                onClick={() => onDeleteClick(search)} // Delete handler
                            >
                                <Vector className="w-2 h-2" />
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="py-2 text-gray-500">
                        No recent searches found
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SearchDropdown;
