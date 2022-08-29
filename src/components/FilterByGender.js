import '../styles/FilterByGender.scss';
function FilterByGender(props) {
    
const handleOnChange = (ev)=> {
    props.handleFilterGender(ev.target.value)
 }

    return (
        <> 
            <label
                className=""
                htmlFor="gender">Género:</label>
            <select
                className=""
                name="gender"
                id="gender"
                value={props.filterGender}
                onChange={handleOnChange}>


                <option value="all" selected>Todos</option>
                <option value="female">Mujer</option>
                <option value="male">Hombre </option>
                
            </select>

        </>
    );
    
}

export default FilterByGender