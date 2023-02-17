import React from "react";
import SearchBar from "./SearchBar";
import styles from "./searchbar.module.css"
import { Link } from "react-router-dom";

function Nav (props){
 return (
    <div className={styles.searchbar}>

        {/* <Link to={'/home'}>LogOut</Link> */}
        <Link to='/home'> <span className={styles.botones}>EXIT</span> </Link>
        <Link to='/characters'> <span className={styles.botones}>CHARACTERS</span> </Link>
        <Link to= '/about'> <span className={styles.botones}>ABOUT</span>  </Link>
        {/* <SearchBar onSearch = {props.onSearch}/> */}
     </div>
 )
};
  
export default Nav; 