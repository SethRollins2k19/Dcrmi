import React from "react"
import {Page} from "../components/containers/PageConstructor";


import "./style/queriesPageStyle.css"

export default class QueriesPage extends React.Component {
    render() {
        return (
            <Page className="Queries" title="queries">
                <div className="Table">
                    <div className="Table__item">
                        <p className="Table__title">id</p>
                        <p className="Table__title">name</p>
                        <p className="Table__title">surname</p>
                        <p className="Table__title">total</p>
                    </div>
                    <div className="Table__item">
                        <p className="Table__title">0</p>
                        <p className="Table__title">Den</p>
                        <p className="Table__title">Aga</p>
                        <p className="Table__title">$3000</p>
                    </div>
                    <div className="Table__item">
                        <p className="Table__title">1</p>
                        <p className="Table__title">Rom</p>
                        <p className="Table__title">Suren</p>
                        <p className="Table__title">$3200</p>
                    </div>
                    <div className="Table__item">
                        <p className="Table__title">2</p>
                        <p className="Table__title">Loew</p>
                        <p className="Table__title">Dungan</p>
                        <p className="Table__title">$120</p>
                    </div>
                    <div className="Table__item">
                        <p className="Table__title">3</p>
                        <p className="Table__title">Loig</p>
                        <p className="Table__title">Donki</p>
                        <p className="Table__title">$40000</p>
                    </div>
                </div>
            </Page>
        );
    }
}