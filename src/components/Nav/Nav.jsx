import React from 'react'
import classes from './Nav.module.css'
import logo from '../Resources/j_logo.png'
import bag from '../Resources/bag@3x.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className={classes.nav}>
        <div className={classes.nav_main}>
            <div>
                <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            <div>
                <img style={{width:30, height:'auto'}} src={bag} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav