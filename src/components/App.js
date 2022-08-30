import getDataApi from '../services/getDataApi';
import localStorage from '../services/localStorage';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer.js';
import logo from '../images/logo.png'
import wizard from '../images/wizard.png'
import '../styles/App.scss';

function App() {
  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  const [filterGender, setFilterGender] = useState('all');
  const [filterAlive, setFilterAlive] = useState('');

  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      setDataCharacter(dataFromApi);
      console.log(dataFromApi);
    });
  }, []);
  /* 
  useEffect(() => {
    localStorage.set('dataCharacter', dataCharacter);
  }, [dataCharacter]); */

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

  const { pathname } = useLocation();
  console.log(pathname);
  const dataPath = matchPath('/character/:characterId', pathname);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharacter.find((character) => {
    return character.id === characterId;
  });
  return (
    <div className="App">
      <Header   
      logo ={logo}
    />

      <main className='main'> </main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                filterName={filterName}
                handleFilterName={setFilterName}
                handleSubmit={handleSubmit}
                dataCharacter={dataCharacter}
                filterHouse={filterHouse}
                handleFilterHouse={setFilterHouse}
                filterGender={filterGender}
                handleFilterGender={setFilterGender}
                filterAlive={filterAlive}
                handleFilterAlive={setFilterAlive}
              />

              <CharacterList characters={characterFilter} />
            </>
          }
        />

        <Route
          path="/character/:characterId"
          element={<CharacterDetail character={characterFound} />}
        />
      </Routes>

      <Footer    wizard={wizard} />
    </div>
  );
}

export default App;
