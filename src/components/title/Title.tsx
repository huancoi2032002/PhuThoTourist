import React from "react"
import { Rectangle } from "../Rectangles/Rectangle/Rectangle"
import './Styles.scss'

type TitleProps = {
    titleHeader: string
    titleContent: string
    description: string
    textColor: React.CSSProperties
    width: string
}

const Title:React.FC<TitleProps> = ({titleHeader,titleContent,description,textColor, width}) => {
    return(
        <div className="xl:w-[803px] w-[375px] flex flex-col items-center xl:gap-[10px] gap-[4px]">
            <h3 className="font-roboto text-center xl:text-[16px] text-[12px] font-semibold" style={textColor}>{titleHeader}</h3>
            <h1 className="text-blue-primary-600 font-philosopher xl:text-[34px] text-[20px] font-bold">{titleContent}</h1>
            <Rectangle width={width}/>
            <p className="font-roboto text-[14px] custom-des-title-home" style={textColor}>{description}</p>
        </div>
    )
}

export default Title