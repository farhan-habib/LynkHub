import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import LogOut from './pages/LogOut'
import Error404 from './pages/404'


const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home isLoggedIn = {loggedIn} />
                </Route>
                <Route exact path="/login">
                    <LogIn isLoggedIn = {loggedIn} />
                </Route>
                <Route exact path="/logout">
                    <LogOut isLoggedIn = {loggedIn} />
                </Route>
                <Route path="/" component={Error404}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App