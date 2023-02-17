import styles from "./searchbar.module.css"
import { useState } from "react";


export default function SearchBar(props) {
   
   const [busqueda, setBusqueda]= useState("")

   function handleChange(event){
      setBusqueda(event.target.value)
   }

   return (
      <div className={styles.searchbar}>
         <input className={styles.inputbar} value= {busqueda} onChange = {handleChange}type='search'/>
      <button className={styles.buttonbar} onClick={() => props.onSearch(busqueda)}> SEARCH  </button> 

      </div>
   );
};



