import React, { useState, useEffect, useRef } from "react";
import './Styles.scss';
import Search from "../../../Search/Search";
import FilterSort from "../../FilterSort/FilterSort";
import { VueSetting } from "../../../../assets/iconpack";
import { IFilterPackRow } from "./FilterPackRow";
import FilterSortMobile from "../../FilterSort/FilterSortMobile";
import FilterSettingMobile from "../../FilterSettingMobile/FilterSettingMobile";

const FilterPackRowMobile: React.FC<IFilterPackRow> = ({ className }) => {
    const [isOpenFilterSort, setIsOpenFilterSort] = useState(false);
    const [isOpenFilterSetting, setIsOpenFilterSetting] = useState(false);
    const filterPackRef = useRef<HTMLDivElement>(null);

    const handleClickFilterSort = () => {
        setIsOpenFilterSort(prevState => !prevState);
    };
    const handleClickFilterSetting = () => {
        setIsOpenFilterSetting(prevState => !prevState);
    };
    const handleCloseFilterSetting = () => {
        setIsOpenFilterSetting(false); // Close the modal when the buttons are clicked
    };
    // Function to handle clicks outside the FilterPackRowMobile
    const handleClickOutside = (event: MouseEvent) => {
        if (filterPackRef.current && !filterPackRef.current.contains(event.target as Node)) {
            setIsOpenFilterSort(false); // Close the FilterSortMobile if clicked outside
        }
    };

    useEffect(() => {
        if (isOpenFilterSort) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpenFilterSort]);

    return (
        <div className="z-30" ref={filterPackRef}>
            <div className={`flex items-center gap-2 custom-filterpackrowmobile p-3 w-[343px] ${className}`}>
                <Search width="231px" />
                <div onClick={handleClickFilterSort}>
                    <FilterSort />
                </div>
                <div className="custom-vuesetting" onClick={handleClickFilterSetting}>
                    <VueSetting />
                </div>
            </div>
            <FilterSortMobile isOpen={isOpenFilterSort} />
            <FilterSettingMobile isOpen={isOpenFilterSetting} onClose={handleCloseFilterSetting} />
        </div>
    );
};

export default FilterPackRowMobile;
