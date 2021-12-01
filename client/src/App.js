import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profiles from './pages/Profiles'
import MyProfile from './pages/MyProfile'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Error404 from './pages/404'


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/profiles" exact component={Profiles} />
                <Route path="/myprofile" exact component={MyProfile} />
                <Route path="/login" exact component={LogIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/" component={Error404}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App