import React from "react"
import { Rectangle } from "../Rectangle/Rectangle"


type TitleProps = {
    titleHeader: string
    titleContent: string
    description: string
    textColor: React.CSSProperties
}

const Title:React.FC<TitleProps> = ({titleHeader,titleContent,description,textColor}) => {
    return(
        <div className="w-[803px]  flex flex-col items-center gap-[10px] ">
            <h3 className="font-roboto text-center text-[16px] font-semibold" style={textColor}>{titleHeader}</h3>
            <h1 className="text-blue-primary-600 font-philosopher text-[34px] font-bold">{titleContent}</h1>
            <Rectangle width="130px"/>
            <p className="font-roboto text-[14px]" style={textColor}>{description}</p>
        </div>
    )
}

export default Title