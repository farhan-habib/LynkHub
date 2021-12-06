import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LogIn from './pages/LogIn'
import LogOut from './pages/LogOut'
import SignUp from './pages/SignUp'
import Error404 from './pages/404'


const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home isLoggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />
                </Route>
                <Route exact path="/about">
                    <About isLoggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />
                </Route>
                <Route exact path="/login">
                    <LogIn isLoggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />
                </Route>
                <Route exact path="/logout">
                    <LogOut isLoggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />
                </Route>
                <Route exact path="/signup">
                    <SignUp isLoggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />
                </Route>
                <Route  path="/">
                    <Error404 isLoggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App