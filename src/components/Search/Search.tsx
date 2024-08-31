import React, { useState } from "react";
import './Search.scss'
import { SearchIcon, Vector } from "../../assets/iconpack";

type SearchProps = {
    width?: string; // Optional width prop
}

const Search: React.FC<SearchProps> = ({ width }) => {
    const [searchText, setSearchText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleClear = () => {
        setSearchText('');
    };

    return (
        <div
            className="flex xl:h-10 h-9 gap-2 flex-col flex-shrink-0 rounded-md"
            style={{ width: width || 'auto' }}
        >
            <div className="w-full xl:h-10 h-9 flex py-4 px-[10px] justify-between items-center self-stretch rounded-md bg-[#FFF] flex-shrink-0">
                <div className="flex items-start xl:gap-[10px] gap-2">
                    <SearchIcon className="cursor-pointer custom-icon-search" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        value={searchText}
                        onChange={handleChange}
                        className="custom-input-search font-roboto"
                    />
                </div>
                {searchText && (
                    <div
                        className="flex size-6 p-2 justify-center items-center cursor-pointer "
                        onClick={handleClear}
                    >
                        <Vector />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search;
