import React from "react"

type RetangleProps = {
    width: string
}

export const Rectangle:React.FC<RetangleProps> = ({width}) => {
    return(
        <div className="h-[6px] rounded-[100px] rectangle" style={{width}}></div>
    )
}