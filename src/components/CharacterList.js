import CharacterItem from './CharacterItem';

function CharacterList(props) {
  const characterElements = props.characters.map((character, index) => { return (  

    <>
    <CharacterItem key={index} character={character} />;
    </>
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
