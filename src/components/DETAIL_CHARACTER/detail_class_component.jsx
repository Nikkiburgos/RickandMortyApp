// import React from 'react';
// import { connect, Connect } from 'react-redux';
// import { getCharacters, cleanCharacters } from '../../redux/actions';
// import CardCharacter from '../CARD_CHARACTER/cardCharacter';
// import cardCharacter from '../CARD_CHARACTER/cardCharacter'


// class Characters extends React.Component{
//     constructor (props){  //ahora aca tengo un {characters: [{...}{...}, getCharacters]}
//         super(props)
// }

// componentDidMount(){
//     this.props.getCharacters()
// }

// componentWillUnmount(){
//     this.props.cleanCharacters()
// }


// render (){
//     return (
//         <div>
//             <h1> CHARACTERS CON CLASS</h1>
//             { this.props.characters?.map((character) => {
//                 return (

//                     <CardCharacter
//                     key = {character.id}
//                     name = {character.name}
//                     id = {character.id}
//                     //etceteraaaaa     
//                     />
//                 )
//             })

//             }

//         </div>
//     )
// }




// }

// const mapStateToProps = (state) => {
//     return {
//         characters: state.characters
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getCharacters: () => dispatch(getCharacters()),
//         cleanCharacters: () => dispatch(cleanCharacters())
//     }
// }

// export default connect (
//     mapStateToProps,
//     mapDispatchToProps
// )(Characters);