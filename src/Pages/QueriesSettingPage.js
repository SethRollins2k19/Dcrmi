import React from "react"
import {Page} from "../components/containers/PageConstructor";

import './style/queriesSettingPage.js.css'
export default class QueriesSettingPage extends React.Component {
    render() {
        return (
            <Page className="Queries-setting" title="Queries Setting">
                <div className="Queries-setting__item">

                </div>
                <button className="Queries-setting__btn">Save settings</button>
            </Page>
        );
    }
}