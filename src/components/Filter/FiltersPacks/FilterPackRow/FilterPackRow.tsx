import React, { useState } from "react";
import './Styles.scss';
import Search from "../../../Search/Search";
import FilterDate from "../../../Filter/FilterDate/DateFilter";
import FilterSort from "../../FilterSort/FilterSort";
export interface IFilterPackRow{
    className: string
}
const FilterPackRow:React.FC<IFilterPackRow> = ({className}) => {
    return (
        <div className={`w-[1134px] h-20 flex-shrink-0 flex justify-between custom-filterpackrow p-5 ${className}`}>
           <Search width="314px" />
           <div className="h-full flex gap-4">
                <FilterDate />
                <FilterSort />
           </div>
        </div>
    )
}

export default FilterPackRow