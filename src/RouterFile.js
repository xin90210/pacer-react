import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Classcomponent from './Classcomponent'
import Functioncomponent from './Functioncomponent'

import Activities from './screens/activities/Activities'
import Activity from './screens/activity/Activity'
import AddEditActivity from './screens/add-edit-activity/AddEditActivity'
import Lobby from './screens/lobby/Lobby'
import Start from './screens/start/Start'


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

                        <Route path="/Start">
                            <Start />
                        </Route>
                        <Route path="/Lobby">
                            <Lobby />
                        </Route>
                        <Route path="/Classcomponent">
                            <Classcomponent />
                        </Route>
                        <Route path="/Functioncomponent">
                            <Functioncomponent />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
