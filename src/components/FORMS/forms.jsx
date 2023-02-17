import { useState } from 'react';
import { Link } from 'react-router-dom';
import validation from './validation';
import style from '../FORMS/forms.module.css'

function Forms({login}) {

    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = useState({
        username: '', 
        password: '' 
    })
    
    const handleInputChange = (event) => {
        setUserData ({
            ...userData,
            [event.target.name]:event.target.value
        })
        setErrors (
            validation ({
                ...userData,
                [event.target.name]:event.target.value
            })
        )
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login (userData)
    }

  return (
 
   <form className={style.bloque} onSubmit={handleSubmit}> 

        <label htmlFor='User'>User:</label>
        <input  type="text" name="username" value={userData.username} onChange={handleInputChange}/>
        {errors.username && <p>{errors.username}</p>}
   
 
        <label htmlFor='Password'>Password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
        {errors.password && <p>{errors.password}</p>}
    
        <button onClick={handleSubmit}>LogIn</button>

         <Link>Forgot my password</Link> 
   </form>
        
        )
    };

export default Forms;