import * as React from 'react';
import { Link } from 'react-router-dom';

const { useLogout } = require('../utils/WithSession');
const styles = require('./NavBar.css');
const HOMEicon = require('../assets/HOMEicon.png');
const PROFILEicon = require('../assets/PROFILEicon.png');
const SETTINGSicon = require('../assets/SETTINGSicon.png');
const FLOWERicon = require('../assets/FLOWERicon.png');

const NavBar = () => {
  const logout = useLogout();

  return (
    <div className={styles.NavBar}>
      <button onClick={logout}>Log Out</button>
      <span className={styles.NavigationFooter}>
        <Link to="/"><img src={HOMEicon} alt="Home" /></Link>&nbsp;
        <Link to="/profile"><img src={PROFILEicon} alt="Profile" /></Link>
        <Link to="/settings"><img src={SETTINGSicon} alt="Settings" /></Link>
        <Link to="/about-us"><img src={FLOWERicon} alt="About Us" /></Link>
      </span>
    </div>
  );
};

export default NavBar;
