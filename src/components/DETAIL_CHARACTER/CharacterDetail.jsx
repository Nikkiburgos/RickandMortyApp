import { getCharacterDetail , cleanDetail} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const CharacterDetail = () => {
    const dispatch = useDispatch();
    
    const { id } = useParams();
    
     const characterDetail = useSelector((state) => state.characterDetail);

    useEffect(()=>{
        dispatch(getCharacterDetail(id))

        return () => dispatch(cleanDetail()) //aca se me va a borrar todo cuando se me desmonte, simula un componentwillunmount
    },[])

    return (
        <div>

           <img src={characterDetail.image} style={{borderRadius: '999999rem'}} alt={characterDetail.name} />
            <h1> {characterDetail.name}</h1>

            <label>Status:</label>
            <p>{characterDetail.status}</p>

            <label>Gender:</label>
            <p>{characterDetail.gender}</p>

             {/* <label>Origin:</label>
            <p>{characterDetail.origin.name}</p>  */}

            <button>
                <Link to={"/characters"}>BACK</Link>
            </button>
    </div>
    )
}

export default CharacterDetail;


