function FilterByAlive(props) {
  const handleOnChange = (ev) => {
    props.handleFilterAlive(ev.target.checked);
  };

  return (
    <>
      <form>
        
        <label htmlFor="alive"> Muerto</label>
        <input
          type="checkbox"
          name="false"
          id = "alive"
      checked={ props.filterAlive}
          onChange={handleOnChange}
        />
      </form>

    
    </>
  );
}

export default FilterByAlive;
