import getDataApi from '../services/getDataApi';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

import { matchPath, Route, Routes, useLocation } from "react-router-dom";


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
const handleSubmit = (ev) => {
  ev.preventDefault();
};

  const characterFilter = dataCharacter
    .filter((character) => {
      

       return character.name.toLowerCase().includes(filterName.toLowerCase())
     
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

    const { pathname } = useLocation();
  console.log(pathname);
  const dataPath = matchPath("/character/:characterId", pathname);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharacter.find(character => { return character.id === characterId });
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
<Routes>

  <Route path='/'
  element={ 
    <><Filters
    filterName={filterName}
    handleFilterName={setFilterName}
    handleSubmit = {handleSubmit} 
    dataCharacter ={dataCharacter}
    filterHouse={filterHouse}
    handleFilterHouse={setFilterHouse}
    filterGender={filterGender}
    handleFilterGender={setFilterGender}
  />

  <CharacterList characters={characterFilter} />
    </>
  }  />

  <Route
  path='/character/:characterId'
  element ={ <CharacterDetail character ={characterFound} />}
  
  />
</Routes>
      
    </div>
  );
}

export default App;
