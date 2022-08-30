import '../styles/CharacterDetail.scss';
import { Link} from "react-router-dom"

function CharacterDetail (props){ 

    
        return (
  <section className='section'>
       
            <Link  to={ `/character/${props.character.id} `}  >

              
            <img
              className="section__characterImage"
              src={props.character.image}
              alt={`Foto de ${props.character.name}`}
              title={`Foto de ${props.character.name}`}
            ></img>
  
            <h2 className="section__characterTitle">{props.character.name}</h2>
            <p className="section__characterSpecie">{`Estatus: ${props.character.alive}`}</p>
            <p className="section__characterSpecie">{`Especie: ${props.character.species}`}</p>
  
            <p className="section__characterSpecie">{`Genero: ${props.character.gender}`}</p>
  
            <p className="section__characterSpecie">{`Casa: ${props.character.house}`}</p>

        

            <Link className='link'  to='/'>Ir al inicio</Link>
            

            </Link>
            </section>
         
        );

}
export default CharacterDetail;