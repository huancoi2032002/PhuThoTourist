import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; // Import theme styles
import { DateIcon, PlayIcon } from "../../../assets/iconpack";
import DatePicker from "./DatePicker";

const DatePickerComponent: React.FC = () => {
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleSelect = (ranges: any) => {
        setDateRange([ranges.selection]);
    };

    return (
        <div className="w-auto h-auto inline-flex flex-col justify-center items-center gap-2 custom-filterdate">
            <div className="w-[322px] h-full flex items-center gap-2">
                <div
                    className="w-[150px] flex justify-between items-center px-3 py-2 self-stretch bg-[#FFF] rounded-md flex-shrink-0 cursor-pointer"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                >
                    <p className="flex items-center gap-3">
                        {dateRange[0].startDate.toLocaleDateString()}
                    </p>
                    <DateIcon />
                </div>
                <PlayIcon />
                <div
                    className="w-[150px] flex justify-between items-center px-3 py-2 self-stretch bg-[#FFF] rounded-md flex-shrink-0 cursor-pointer"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                >
                    <p className="flex items-center gap-3">
                        {dateRange[0].endDate.toLocaleDateString()}
                    </p>
                    <DateIcon />
                </div>
            </div>

            {/* Conditionally render the date picker */}
            {showDatePicker && (
                <div className="absolute mt-[350px]">
                    <DatePicker />
                </div>
            )}
        </div>
    );
};

export default DatePickerComponent;
