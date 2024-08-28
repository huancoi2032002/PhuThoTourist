import React, { FC } from "react"
import { PolygonIcon } from "../../../assets"
import './Styles.scss'

type RectangleTitleProps = {
    label: string
}

const RectangleTitle: React.FC<RectangleTitleProps> = ({label}) => {
    return (
        <div className="p-12">
            <div className="2xl:w-[378px] w-[247px] 2xl:h-[98px] h-[64px] flex items-center justify-center relative">
                <div className="h-full flex items-center justify-center">
                    <PolygonIcon className="xl:w-[368px] xl:h-[106px] w-[300px] h-[80px]" />
                </div>
                <h2 className="font-philosopher custom-title-rec absolute inset-0 flex items-center justify-center">
                    {label}
                </h2>
            </div>
        </div>

    )
}

export default RectangleTitle