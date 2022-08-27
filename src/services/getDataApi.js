function getDataApi() {
  return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor ')
    .then((response) => response.json())
    .then((responseData) => {
      const dataClean =
        responseData.map((character) => {
          return {
          
            image: character.image,
            name: character.name,
            alive: character.alive,
            species: character.species,
            gender: character.gender,
            house: character.house


          };
        }) ; 

      return dataClean;
    });
}
export default getDataApi;
