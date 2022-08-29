import '../styles/Header.scss';
import { Link} from "react-router-dom"

function CharacterDetail (props){ 

    if (props.character.image === '') {
        return (props.character.image =
          'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter');
      } else {
        return (
          <li >
       
            <Link  to={ `/character/${props.character.id} `}  >

              <section>
            <img
              className=""
              src={props.character.image}
              alt={`Foto de ${props.character.name}`}
              title={`Foto de ${props.character.name}`}
            ></img>
  
            <h2 className="h">{props.character.name}</h2>
            <p className="">{`Estatus: ${props.character.alive}`}</p>
            <p className="">{`Especie: ${props.character.species}`}</p>
  
            <p className="">{`Genero: ${props.character.gender}`}</p>
  
            <p className="">{`Casa: ${props.character.house}`}</p>

            </section>

            <Link to='/'>Ir al inicio</Link>
            

            </Link>
          </li>
        );

}}
export default CharacterDetail;