import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; // Import theme styles
import { DateIcon, PlayIcon } from "../../../assets/iconpack";
import DatePicker from "./DatePicker";

const DatePickerComponent: React.FC = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    return (
        <div className="w-auto h-auto inline-flex flex-col justify-center items-center gap-2 custom-filterdate">
            <div className="w-[322px] h-full flex items-center gap-2">
                <div
                    className="w-[150px] flex justify-between items-center px-3 py-2 self-stretch bg-[#FFF] rounded-md flex-shrink-0 cursor-pointer"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                >
                    <p className="flex items-center gap-3 custom-day-datefilter">
                        10/10/2021
                    </p>
                    <DateIcon />
                </div>
                <PlayIcon />
                <div
                    className="w-[150px] flex justify-between items-center px-3 py-2 self-stretch bg-[#FFF] rounded-md flex-shrink-0 cursor-pointer"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                >
                    <p className="flex items-center gap-3 custom-day-datefilter">
                        10/10/2021
                    </p>
                    <DateIcon />
                </div>
            </div>

            {/* Conditionally render the date picker */}
            {showDatePicker && (
                <div className="absolute mt-[350px]">
                    <DatePicker  />
                </div>
            )}
        </div>
    );
};

export default DatePickerComponent;
