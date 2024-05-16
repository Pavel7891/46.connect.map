import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
console.log(classes);

// let a = 'item';
// let b = 'active';

// let class = a + " " +b;
// let classString = `${classes.item} ${classes.active}`;

const Navbar =()=> {
    return (<nav className={classes.nav}>
    <div className = {classes.item}>
       {/* <a href="/profile">Profile</a>  */}
      <NavLink to="/profile" className ={classes.activeLink}>Profile</NavLink>
      </div>
    <div className ={classes.item}>
       {/* <a href="/dialogues">Messages</a>  */}
      <NavLink to="/dialogues">Messages</NavLink> 
      </div>
    <div className ={classes.item}>
      <a>News</a>
      {/* <NavLink to "">News</NavLink> */}
      </div>
    <div className ={classes.item}>
      <a>Music</a>
      {/* <NavLink to "">Music</NavLink> */}
      </div>
      <div className ={classes.item}>
        <a>Settings</a>
        {/* <NavLink to "">Settings</NavLink> */}
      </div>
  </nav>)
}

export default Navbar;


 