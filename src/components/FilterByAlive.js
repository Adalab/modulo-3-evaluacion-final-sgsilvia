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
          value={props.filterAlive}
          onChange={handleOnChange}
        />
        <label htmlFor=""> Muerto</label>
        <input
          type="checkbox"
          name="false"
          value={props.filterAlive}
          onChange={handleOnChange}
        />
      </form>
    </>
  );
}

export default FilterByAlive;
