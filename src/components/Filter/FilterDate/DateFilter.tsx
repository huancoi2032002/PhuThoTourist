import { addDays, format, subDays } from "date-fns";
import { enUS } from "date-fns/locale";
import { useCallback, useState } from "react";
import type { FC } from "react";
import type { RangeKeyDict } from "react-date-range";
import type { Range } from "react-date-range";
import { DateIcon, PlayIcon } from "../../../assets/iconpack";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DataRangePicker } from "./DataRangePickerComponent"; // Correct import here

const DatePickerComponent: FC = () => {
    const [isDateRangePickerVisible, setIsDateRangePickerVisible] = useState(false);

    const [valueDateRangePicker, setValueDateRangePicker] = useState<Range[] | undefined>([
        {
            startDate: subDays(new Date(), 7),
            endDate: addDays(new Date(), 0),
            key: "selection",
        },
    ]);

    const formattedValueDateRangePickerStartDate = valueDateRangePicker?.[0].startDate
        ? format(valueDateRangePicker[0].startDate, "dd.MM.yyyy", { locale: enUS })
        : "";
    const formattedValueDateRangePickerEndDate = valueDateRangePicker?.[0].endDate
        ? format(valueDateRangePicker[0].endDate, "dd.MM.yyyy", { locale: enUS })
        : "";

    const handleChangeValueDateRangePicker = useCallback((ranges: RangeKeyDict) => {
        const { selection } = ranges;
        setValueDateRangePicker([selection]);
        setIsDateRangePickerVisible(false); // Hide DateRangePicker after selection
    }, []);

    const toggleDateRangePicker = () => {
        setIsDateRangePickerVisible(!isDateRangePickerVisible);
    };

    return (
        <div className="w-auto h-auto inline-flex flex-col justify-center items-center gap-2 custom-filterdate">
            <div className="w-[322px] h-full flex items-center gap-2 ">
                <div
                    className="w-[150px] flex justify-between items-center px-3 py-2 self-stretch bg-[#FFF] rounded-md flex-shrink-0 cursor-pointer"
                    onClick={toggleDateRangePicker}
                >
                    <p className="flex items-center gap-3">{formattedValueDateRangePickerStartDate}</p>
                    <DateIcon />
                </div>
                <PlayIcon />
                <div
                    className="w-[150px] flex justify-between items-center px-3 py-2 self-stretch bg-[#FFF] rounded-md flex-shrink-0 cursor-pointer"
                    onClick={toggleDateRangePicker}
                >
                    <p className="flex items-center gap-3">{formattedValueDateRangePickerEndDate}</p>
                    <DateIcon />
                </div>
            </div>
            {isDateRangePickerVisible && (
                <DataRangePicker
                    editableDateInputs={true}
                    locale={enUS}
                    minDate={addDays(new Date(), -7)}
                    maxDate={addDays(new Date(), 0)}
                    onChange={handleChangeValueDateRangePicker}
                    ranges={valueDateRangePicker}
                    showDateDisplay={true}
                    showPreview={true}
                />
            )}
        </div>
    );
};

export default DatePickerComponent;
