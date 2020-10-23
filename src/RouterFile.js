import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Activities from './screens/activities/Activities'
import Activity from './screens/activity/Activity'
import AddEditActivity from './screens/add-edit-activity/AddEditActivity'
import AddEditEndeavor from './screens/add-edit-endeavor/AddEditEndeavor'
import AddSchema from './screens/add-schema/AddSchema'
import Confidence from './screens/confidence/Confidence'
import Lobby from './screens/lobby/Lobby'
import Start from './screens/start/Start'


export default class RouterFile extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/activities">
                            <Activities />
                        </Route>
                        <Route path="/activity">
                            <Activity />
                        </Route>
                        <Route path="/Add-edit-activity">
                            <AddEditActivity />
                        </Route>
                        <Route path="/Add-Edit-Endeavor">
                            <AddEditEndeavor />
                        </Route>
                        <Route path="/Add-Schema">
                            <AddSchema />
                        </Route>
                        <Route path="/Confidence">
                            <Confidence />
                        </Route>
                        <Route path="/Start">
                            <Start />
                        </Route>
                        <Route path="/Lobby">
                            <Lobby />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
