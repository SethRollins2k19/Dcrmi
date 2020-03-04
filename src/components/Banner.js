import React from "react"

import "./style/bannerStyle.css"

export const Banner = ({title,subtitle})=>{
    return(
        <div className="Banner">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    )
}