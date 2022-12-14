import '../styles/CharacterCard.scss';
import { Link } from "react-router-dom"
import logo from '../images/placeHolder.jpg'

function CharacterCard(props) {

  if (props.character.image === '') {
    return (
      <section className='section' >
        <Link className='link' to={`character/${props.character.id} `} >

          
        <img
          className="section__characterImage"
          src={logo}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        ></img>

        <h2 className="section__characterTitle">{props.character.name}</h2>
        
        <p className="section__characterSpecie">{`Especie: ${props.character.species}`}</p>

      

        </Link>
    
      </section>
    );}
    else {
        return (
          <section className='section' >
            <Link className='link' to={`character/${props.character.id} `} >

              
            <img
              className="section__characterImage"
              src={props.character.image}
              alt={`Foto de ${props.character.name}`}
              title={`Foto de ${props.character.name}`}
            ></img>
  
            <h2 className="section__characterTitle">{props.character.name}</h2>
            
            <p className="section__characterSpecie">{`Especie: ${props.character.species}`}</p>
  
          
  
            </Link>
        
          </section>
        );
    
}}

export default CharacterCard;