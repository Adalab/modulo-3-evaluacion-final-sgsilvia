

import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const characterElements = props.characters.map((character) => { return (  

    <CharacterCard key={character.id} character={character} />
  
  )
    
  });

  return (
    <>
      <section>
        <ul className="">

          {characterElements}
        </ul>
      </section>
    </>
  );
}

export default CharacterList;
