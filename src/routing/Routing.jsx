import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";
import {paths} from '../constans'
import Navbar from "../components/Navbar/Navbar";
import DataList from "../pages/DataList/DataList";

const Routing = () => {
return (
<Router>
    <Navbar/>
    <Switch>
        <Route exact path={paths.main} >
          <Main/>
        </Route>
        <Route exact path={paths.about} >
            <About/>
        </Route>
        <Route exact path={paths.settings} >
            <Settings/>
        </Route>
        <Route exact path={paths.dataList} >
            <DataList/>
        </Route>
       <NotFound/>
    </Switch>
</Router>
)
}
export default Routing