import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';



export default function Nav(props) {
   return (
    <div className={styles.searchbar}>
      <Link to ='/' className={styles.botones}>LOGOUT</Link>
       <Link to="home"  className={styles.botones}>
        <span>HOME</span>
       </Link> 
       
       <Link to="favorites"  className={styles.botones}>
        <span>FAVORITES</span>
       </Link> 
      
        <Link to="about"  className={styles.botones}>
          <span>ABOUT</span>
        </Link>
        <SearchBar onSearch={props.onSearch}/> 
      </div>
   );
}
