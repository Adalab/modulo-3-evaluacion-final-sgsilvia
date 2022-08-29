function FilterByName(props) {

    const handleKeyUp =(ev)=> {

  
        props.handleFilterName (ev.target.value)
        console.log(ev.target.value);
     };
     if (props.filterName !== props.dataCharacter){ return <p> No hay ningún personaje que coincida con la palabra { props.filterName}  </p>}
else {

    return (<>
    <form   onSubmit={props.handleSubmit}>
      <label> Buscar por personaje</label>

      <input
        className=""
        type="text"
        name="name"
        id="name"
        value= {props.filterName}
       onChange={handleKeyUp}
      />
    </form>
  </> )}
  
}

export default FilterByName;