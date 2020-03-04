//react env
import React from "react"
//assets
import {Chart} from "../../node_modules/chart.js/dist/Chart.bundle"
import "../../node_modules/chart.js/dist/Chart.css"
//components
import {MainContainerComponent} from "../components/containers/MainContainerComponent";
//style
import './style/organisationPageStyle.css'
import {Page} from "../components/containers/PageConstructor";

export default class OrganisationPage extends React.Component{

    componentDidMount() {
        let ctx = document.getElementById('orders-count').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: [{
            x: 10,
            y: 20
        }, {
            x: 15,
            y: 10
        }],
            options: {
                scales: {
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    }

    render() {
        return(
            <Page className="Organisation" title="Organisation">
                <div className="Organisation__item">
                    <p className="Organisation__subtitle">Orders count</p>
                    <canvas id="orders-count" width="200" height="300">

                    </canvas>
                </div>
                <div className="Organisation__item">
                    <p className="Organisation__subtitle">Orders per month</p>
                </div>
                <div className="Organisation__item">
                    <p className="Organisation__subtitle">Orders per year</p>
                </div>
            </Page>
        )
    }
}