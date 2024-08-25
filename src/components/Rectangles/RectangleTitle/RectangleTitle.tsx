import React, { FC } from "react"
import { PolygonIcon } from "../../../assets"
import './Styles.scss'

type RectangleTitleProps = {
    label: string
}

const RectangleTitle: React.FC<RectangleTitleProps> = ({label}) => {
    return (
        <div className="p-12">
            <div className="w-[378px] h-[98px] flex items-center justify-center relative">
                <div className="h-full flex items-center justify-center">
                    <PolygonIcon className="" />
                </div>
                <h2 className="font-philosopher custom-title-rec absolute inset-0 flex items-center justify-center">
                    {label}
                </h2>
            </div>
        </div>

    )
}

export default RectangleTitle