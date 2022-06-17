import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Menus from './components/Menus/Menus'
import Nav from './components/Nav/Nav'
const App = () => {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/menus/:id'} component={Menus}/>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
