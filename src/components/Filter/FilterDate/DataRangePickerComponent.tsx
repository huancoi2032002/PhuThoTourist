import React, { memo } from "react";
import { DateRange } from 'react-date-range';
import type { DateRangeProps, RangeKeyDict, Range } from "react-date-range";
import { Locale } from "date-fns";
import "./FilterDate.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type DateProps = {
    editableDateInputs?: boolean;
    locale?: Locale;
    onChange?: ((rangesByKey: RangeKeyDict) => void) | undefined;
    ranges?: Range[] | undefined;
    scroll?: boolean;
    showDateDisplay?: boolean;
    showMonthAndYearPickers?: boolean;
    showPreview?: boolean;
} & DateRangeProps;

const DataRangePickerComponent: React.FC<DateProps> = (props: DateProps) => {
    const { editableDateInputs, locale, onChange, ranges, scroll = false, showDateDisplay = false, showMonthAndYearPickers = true, showPreview = false } = props;

    return (
        <div className="w-auto h-auto inline-flex flex-col justify-center items-center gap-2">
            <div className="w-[322px] h-full flex items-center gap-2">
                <DateRange
                    {...props}
                    editableDateInputs={editableDateInputs}
                    locale={locale}
                    onChange={onChange}
                    ranges={ranges}
                    scroll={{ enabled: scroll }}
                    showDateDisplay={showDateDisplay}
                    showMonthAndYearPickers={showMonthAndYearPickers}
                    showPreview={showPreview}
                />
            </div>
        </div>
    );
};

export const DataRangePicker = memo(DataRangePickerComponent);
