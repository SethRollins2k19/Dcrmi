//react env
import React from "react"
import {Link} from "react-router-dom"
//assets
import noImg from "../assets/no-img.png"
//style
import "./style/headerStyle.css"
import {_} from "../util";

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__user">
                    <Link to="#">
                        <img src={noImg} alt="avatar" className="header__avatar"/>
                    </Link>
                    <p className="header__username">Vasily</p>
                </div>
                <nav className="nav">
                    <Link to={`${_.defaultBrowserPosition}`} className="nav__item">Organisation</Link>
                    <Link to={`${_.defaultBrowserPosition}Queries`} className="nav__item">Queries</Link>
                    <Link to={`${_.defaultBrowserPosition}SettingQueries`} className="nav__item">Setting queries</Link>
                    <Link to={`${_.defaultBrowserPosition}SettingKey`} className="nav__item">Setting key</Link>
                    <Link to="#" className="nav__item">Exit</Link>
                </nav>
            </header>
        )
    }
}