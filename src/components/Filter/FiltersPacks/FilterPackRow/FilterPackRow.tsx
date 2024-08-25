import React, { useState } from "react";
import './Styles.scss';
import Search from "../../../Search/Search";
import FilterDate from "../../../Filter/FilterDate/DateFilter";
import FilterSort from "../../FilterSort/FilterSort";

const FilterPackRow = () => {
    return (
        <div className="w-[1134px] h-20 flex-shrink-0 flex justify-between custom-filterpackrow p-5">
           <Search />
           <div className="h-full flex gap-4">
                <FilterDate />
                <FilterSort />
           </div>
        </div>
    )
}

export default FilterPackRow