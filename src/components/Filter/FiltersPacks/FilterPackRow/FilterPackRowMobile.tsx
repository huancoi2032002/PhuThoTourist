import React, { useState } from "react";
import './Styles.scss';
import Search from "../../../Search/Search";
import FilterSort from "../../FilterSort/FilterSort";
import { VueSetting } from "../../../../assets/iconpack";
import { IFilterPackRow } from "./FilterPackRow";


const FilterPackRowMobile:React.FC<IFilterPackRow> = ({className}) => {
    return (
        <div className={`flex items-center gap-2 custom-filterpackrowmobile p-3 ${className}`}>
            <Search />
            <FilterSort />
            <div className="custom-vuesetting">
                <VueSetting />
            </div>
        </div>
    )
}

export default FilterPackRowMobile