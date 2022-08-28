import getDataApi from '../services/getDataApi';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  const [filterGender, setFilterGender] = useState('all');

  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      setDataCharacter(dataFromApi);
      console.log(dataFromApi);
    });
  }, []);

  //filtros//

  /* const handleFilterName = (value) => {
    setFilterName(value);
  };
  
  const handleFilterHouse = (value) => {
    setFilterHouse(value);
  };
    
*/

  const characterFilter = dataCharacter
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterHouse === 'all' ? true : character.house === filterHouse;
    })
    .filter((character) => {
      if (filterGender === 'all') {
        return character.gender;
      } else {
        return character.gender === filterGender;
      }
    });

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <Routes>
        <Route
        path="/"
        element={ <>
        <section>
        <Filters
          filterName={filterName}
          handleFilterName={setFilterName}
          filterHouse={filterHouse}
          handleFilterHouse={setFilterHouse}
          filterGender={filterGender}
          handleFilterGender={setFilterGender}
        />

        <CharacterList characters={characterFilter} />
        </section>
        </>}
        />

        <Route
        path= "character"
        element={ CharacterDetail}
        
        />

      </Routes>
    </div>
  );
}

export default App;
