import './App.css';
import {Route, Routes, useNavigate, useLocation} from 'react-router-dom'
import { useState } from 'react';
import Characters from './components/CHARACTERS/characters';
import Landing from './components/LANDING/landing';
import CharacterDetail from './components/DETAIL_CHARACTER/CharacterDetail';
import About from './components/ABOUT/about'
import Nav from './components/NAV/nav'
import Forms from './components/FORMS/forms'





function App() {

  const location = useLocation();

  const [characters, setCharacters]= useState([]);

  function onSearch(character) {
    fetch (`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             const alreadyExists = characters.some(char => char.id === data.id);
             if (!alreadyExists) {
                setCharacters((oldChars) => [...oldChars, data]);
             } else {
                window.alert(`El personaje ${data.name} ya ha sido agregado`);
             }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }
  
  function onClose (id){
  setCharacters (characters.filter(personaje => personaje.id !== id))
  }


  return (
    <div className="App">

     {location.pathname === "/home" ? <Landing/> : <Nav onSearch={onSearch}/>} 
      
      

    <Routes>
      {/* <Route  path ='/home'  element={<Landing/>}/> */}
     
      <Route exact path='/characters' element={<Characters/>}/> 
      <Route path='/detail/:id' element ={<CharacterDetail />} />
      <Route path='/about' element= {<About/>} />
      <Route path= '/forms' element= {<Forms/>} />
    

    </Routes>



    </div>
  );
}

export default App;
