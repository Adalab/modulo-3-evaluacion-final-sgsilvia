import '../styles/CharacterDetail.scss';
import logo from '../images/placeHolder.jpg'


import { Link} from "react-router-dom"

function CharacterDetail (props){ 
  const getStatus =  props.character.alive === true ? (
      <span> 
        Estatus: Vivo <i className="fas fa-heart"></i>
      </span>
    ) : (
      <span>
       estatus: Muerto <i className="fas fa-heart-broken"></i>
      </span>
    );
  ;
    

  if (props.character.image === '') {return (
    <section className='section'>
         
              <Link  to={ `/character/${props.character.id} `}  >
  
                
              <img
                className="section__characterImage"
                src={logo}
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}
              ></img>
    
              <h2 className="section__characterTitle">{props.character.name}</h2>
              <p className="section__characterSpecie">{getStatus}</p>
              <p className="section__characterSpecie">{`Especie: ${props.character.species}`}</p>
    
              <p className="section__characterSpecie">{`Genero: ${props.character.gender}`}</p>
    
              <p className="section__characterSpecie">{`Casa: ${props.character.house}`}</p>
  
          
  
              <Link className='backLink'  to='/'>Ir al inicio</Link>
              
  
              </Link>
              </section>
           
          );

  }
  else {
        return (
  <section className='section'>
       
            <Link  className='link' to={ `/character/${props.character.id} `}  >

              
            <img
              className="section__characterImage"
              src={props.character.image}
              alt={`Foto de ${props.character.name}`}
              title={`Foto de ${props.character.name}`}
            ></img>
  
            <h2 className="section__characterTitle">{props.character.name}</h2>
            <p className="section__characterSpecie">{getStatus}</p>
            <p className="section__characterSpecie">{`Especie: ${props.character.species}`}</p>
  
            <p className="section__characterSpecie">{`Genero: ${props.character.gender}`}</p>
  
            <p className="section__characterSpecie">{`Casa: ${props.character.house}`}</p>

        

            <Link className='backLink'  to='/'>Ir al inicio</Link>
            

            </Link>
            </section>
         
        );

}}
export default CharacterDetail;