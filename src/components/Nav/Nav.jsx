import React, { useState } from "react";
import classes from "./Nav.module.css";
import logo from "../Resources/j_logo.png";
import bag from "../Resources/bag@3x.png";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { motion } from "framer-motion";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const Nav = () => {
  const [isDrawerOpen, setDrawerToOpen] = useState(false);
  return (
    <React.Fragment>
      {isDrawerOpen && (
        <div className={classes.nav_left}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            onClick={() => {
              setDrawerToOpen(false);
            }}
            className={classes.backdrop}
          ></motion.div>
          <motion.div
            initial={{ x: "-100ch", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={classes.drawer}
          >
            <div className={classes.drawer_head}>
              <div>
                <AccountCircleRoundedIcon style={{width:50, height:'auto'}} />
              </div>
              <div>Sign In</div>
            </div>
            <div className={classes.drawer_menu}>
              <Link to={'/'}>Home</Link>
              <Link to={'/menus/Best Offer'}>Menu</Link>
            </div>
          </motion.div>
        </div>
      )}
      <div className={classes.nav}>
        <div className={classes.nav_main}>
          <div className={classes.nav_icon}>
            <MenuRoundedIcon
              onClick={() => {
                setDrawerToOpen(true);
              }}
              style={{ color: "white" }}
            />
          </div>
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div>
            <img style={{ width: 30, height: "auto" }} src={bag} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
