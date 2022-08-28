import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const characterElements = props.characters.map((character, index) => { return (  

    <CharacterCard key={index} character={character} />
  
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
