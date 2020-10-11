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


export default class RouterFile extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/Activities">
                            <Activities />
                        </Route>
                        <Route path="/Activity">
                            <Activity />
                        </Route>
                        <Route path="/Add-edit-activity">
                            <AddEditActivity />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
