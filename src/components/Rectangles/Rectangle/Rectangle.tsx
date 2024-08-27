import React from "react";

type RectangleProps = {
    width: string;
};

export const Rectangle: React.FC<RectangleProps> = ({ width }) => {
    return (
        <div className={`h-[6px] rounded-[100px] rectangle ${width}`}></div>
    );
};
