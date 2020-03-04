import React from "react"

import {MainContainerComponent} from "./MainContainerComponent";

import "../style/pageConstructorStyle.css"

export const Page = ({className = "",title,children}) => {
    return (
        <div className={`Page ${className}`}>
            <MainContainerComponent>
                <div className={`Page__inner`}>
                    <h2 className="Page__title">{title}</h2>
                    <div className={`Page__content ${className !== "" ? `${className}__content`: ""}`}>
                        {children}
                    </div>
                </div>
            </MainContainerComponent>
        </div>
    )
}