import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer'
import thunkMiddleware from "redux-thunk"; //es mi 'traductor' para el applyMiddleware, para poder hacer peticiones a la API


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
 //esta linea nos sirve para  conectarnos con la extensión del navegador => redux devtools


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunkMiddleware)))
//esta linea me sirve para poder hacer peticiones a la API


export default store;  //le tengo que avisar a mi app de react que tengo un store! 