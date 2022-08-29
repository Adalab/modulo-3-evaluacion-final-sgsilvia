function FilterByAlive(props) {
  const handleOnChange = (ev) => {
    props.handleFilterAlive(ev.target.checked);
  };

  return (
    <>
      <form>
        <label htmlFor="alive">Vivo</label>
        <input
          type="checkbox"
          name="true"
          id= "alive"
          value={props.filterAlive}
          onChange={handleOnChange}
          checked={ props.filterAlive=== true}
        />
        <label htmlFor="alive"> Muerto</label>
        <input
          type="checkbox"
          name="false"
          id = "alive"
         value={props.filterAlive}
         checked={ props.filterAlive=== false}
          onChange={handleOnChange}
        />
      </form>

    
    </>
  );
}

export default FilterByAlive;
