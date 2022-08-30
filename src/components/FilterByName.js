import '../styles/Filters.scss';

function FilterByName(props) {

    const handleKeyUp =(ev)=> {

  
        props.handleFilterName (ev.target.value)
        console.log(ev.target.value);
     };
     
     if (props.filterName === props.dataCharacter || " " ) return (<>
    <form   onSubmit={props.handleSubmit}>
      <label> Buscar por personaje: </label>

      <input
        className=""
        placeholder='ex:"Dumbledore"'
        type="text"
        name="name"
        id="name"
        value= {props.filterName}
       onChange={handleKeyUp}
      />
    </form>
  </> )
  
     
     else{   return <p> No hay ningún personaje que coincida con la palabra { props.filterName}  </p>}

     

   
}

export default FilterByName;
