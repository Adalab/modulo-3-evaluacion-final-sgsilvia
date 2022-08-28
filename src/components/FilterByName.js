function FilterByName(props) {

    const handleKeyUp =(ev)=> {
    
        props.handleFilterName (ev.target.value)
        console.log(ev.target.value);
     };

    return (<>
    <form>
      <label> Buscar por personaje</label>

      <input
        className="n"
        type="text"
        name="name"
        id="name"
        value= {props.filterName}
       onChange={handleKeyUp}
      />
    </form>
  </> )
  
}

export default FilterByName;
