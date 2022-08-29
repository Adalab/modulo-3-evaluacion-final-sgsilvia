import { Link } from "react-router-dom"

function CharacterCard(props) {


    if (props.character.image === '') {
        return (props.character.image =
          'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter');
      } else {
        return (
          <section >
            <Link to={`character/${props.character.id} `} >
            <img
              className=""
              src={props.character.image}
              alt={`Foto de ${props.character.name}`}
              title={`Foto de ${props.character.name}`}
            ></img>
  
            <h2 className="">{props.character.name}</h2>
            
            <p className="">{`Especie: ${props.character.species}`}</p>
  
          
  
            </Link>
        
          </section>
        );
    
}}

export default CharacterCard;