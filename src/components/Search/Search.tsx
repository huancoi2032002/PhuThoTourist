import React, { useState } from "react";
import './Search.scss'
import { SearchIcon, Vector } from "../../assets/iconpack";

type SearchProps = {
}

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleClear = () => {
        setSearchText('');
    };

    return (
        <div className="flex w-[314px] h-10 gap-2 flex-col flex-shrink-0 rounded-md">
            <div className="w-full h-10 flex py-4 px-[10px] justify-between items-center self-stretch rounded-md bg-[#FFF] flex-shrink-0">
                <div className="flex pr-3 items-start gap-[10px]">
                    <SearchIcon className="cursor-pointer" />
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
