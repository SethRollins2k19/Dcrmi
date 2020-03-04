//react env
import React from 'react';
import { Switch, Route } from 'react-router-dom'
//assets
import {_} from "./util";
//components
import HeaderComponent from "./components/HeaderComponent";
import OrganisationPage from "./Pages/OrganisationPage";
import QueriesPage from "./Pages/QueriesPage";
import QueriesSettingPage from "./Pages/QueriesSettingPage";
import SettingKeyPage from "./Pages/SettingKeyPage";
import {Page404} from "./Pages/404Page";

//style
import './App.css';

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <Switch className="App__inner">
            <Route exact path={`${_.defaultBrowserPosition}`} component={OrganisationPage}/>
            <Route exact path={`${_.defaultBrowserPosition}Queries`} component={QueriesPage}/>
            <Route exact path={`${_.defaultBrowserPosition}SettingQueries`} component={QueriesSettingPage}/>
            <Route exact path={`${_.defaultBrowserPosition}SettingKey`} component={SettingKeyPage}/>
            <Route component={Page404}/>
        </Switch>
    </div>
  );
}

export default App;
