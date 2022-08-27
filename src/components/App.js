

import getDataApi from '../services/getDataApi';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';



function App() {

  const [ dataCharacter , setDataCharacter , ]= useState ([]);

useEffect (()=>{ 
  getDataApi().then ((dataFromApi)=> {
    setDataCharacter ( dataFromApi)
    console.log(dataFromApi);})
 

} , [])


  return (
    <div className="App">
      <header className="App-header">
       

        <CharacterList  characters = { dataCharacter} />
        
      </header>
    </div>
  );
}

export default App;
