import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState} from "react";
import { getCharacters } from "../../redux/actions";
import CardCharacter from "../CARD_CHARACTER/cardCharacter";
import styles from './characters.module.css'

const Characters = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);
  
    const handleSearchTermChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    useEffect(() => {
      dispatch(getCharacters());
    }, []);
  
    return (
      <div>
        <h1 className={styles.title}>SEARCH CHARACTER:</h1>
  
        <div>
          <input
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
  
        <div className={styles.componentes}>
          {characters
            .filter(
              (character) =>
                character.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((character) => (
              <CardCharacter
                key={character?.id}
                id={character?.id}
                name={character?.name}
                image={character?.image}
                gender={character.gender}
                species={character.species}
                origin={character.origin.name}
                status={character.status}
              />
            ))}
        </div>
      </div>
    );
  };
  

export default Characters; 