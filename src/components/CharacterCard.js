function CharacterCard(props) {


    if (props.character.image === '') {
        return (props.character.image =
          'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter');
      } else {
        return (
          <li >
            <img
              className=""
              src={props.character.image}
              alt={`Foto de ${props.character.name}`}
              title={`Foto de ${props.character.name}`}
            ></img>
  
            <h2 className="">{props.character.name}</h2>
            
            <p className="">{`Especie: ${props.character.species}`}</p>
  
          
  
     
        
          </li>
        );
    
}}

export default CharacterCard;