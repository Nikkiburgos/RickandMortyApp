import { Link } from "react-router-dom"


const CardCharacter = ({id, name, image}) => {
    return (
        <div>
            <Link to={`/detail/${id}`}>
            <img src={image} alt={name} style={{borderRadius: '9999999rem'}}/>
            </Link>
            <h2>{name}</h2>  
        </div>
    )



}


export default CardCharacter