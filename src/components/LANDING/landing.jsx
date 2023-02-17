import { Link } from "react-router-dom";
import style from './landing.module.css'



const Landing = () => {
 return (
    <div className={style.fondo}>
        <h1> WELCOME TO RICK AND MORTY APP</h1>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VJJXXsB8OJlIcPBPDz5X7e7iynP67HHD100DYtO4&s" alt="" style={{borderRadius: '999999rem'}} />
        <button> 
            <Link to="/about">CLICK</Link>
        </button>


    </div>
 )
}

export default Landing;