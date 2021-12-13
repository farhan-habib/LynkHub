import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MyProfile from './pages/MyProfile.jsx'
import LogIn from './pages/LogIn.jsx'
import LogOut from './pages/LogOut.jsx'
import SignUp from './pages/SignUp.jsx'
import Error404 from './pages/404.jsx'


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
                <Route exact path="/myprofile">
                    <MyProfile isLoggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />
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

