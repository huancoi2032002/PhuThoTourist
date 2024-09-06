import React, { useState, useRef, useEffect } from "react";
import './Search.scss';
import { SearchIcon, Vector } from "../../assets/iconpack";
import SearchDropdown from './SearchDropdown';

type SearchProps = {
    width?: string;
};

const Search: React.FC<SearchProps> = ({ width }) => {
    const [searchText, setSearchText] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [recentSearches, setRecentSearches] = useState<string[]>(['React', 'TypeScript', 'Tailwind CSS']);
    const searchRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleClear = () => {
        setSearchText('');
        setShowDropdown(false);
    };

    const handleFocus = () => {
        setShowDropdown(true);
    };

    const handleSearchClick = (searchTerm: string) => {
        setSearchText(searchTerm);
        setShowDropdown(false);
    };

    const handleDeleteClick = (searchTerm: string) => {
        setRecentSearches(recentSearches.filter(search => search !== searchTerm));
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className="flex xl:h-10 h-9 gap-2 flex-col flex-shrink-0 rounded-md relative z-30"
            style={{ width: width || 'auto' }}
            ref={searchRef} // Reference to the search component
        >
            <div className="w-full xl:h-10 h-9 flex py-4 px-[10px] justify-between items-center self-stretch rounded-md bg-[#FFF] flex-shrink-0">
                <div className="flex items-start xl:gap-[10px] gap-2">
                    <SearchIcon className="cursor-pointer custom-icon-search" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        value={searchText}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        className="custom-input-search font-roboto"
                    />
                </div>
                {searchText && (
                    <div
                        className="flex size-6 p-2 justify-center items-center cursor-pointer"
                        onClick={handleClear}
                    >
                        <Vector />
                    </div>
                )}
            </div>
            {showDropdown && (
                <SearchDropdown
                    recentSearches={recentSearches}
                    onSearchClick={handleSearchClick}
                    onDeleteClick={handleDeleteClick} // Pass the delete handler
                />
            )}
        </div>
    );
};

export default Search;
