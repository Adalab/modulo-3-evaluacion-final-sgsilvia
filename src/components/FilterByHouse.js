function FilterByHouse (props){

    const handleOnChange =(ev)=>{ 
        props.handleFilterHouse(ev.target.value)

    }

    return (
        <>
            <label
                className=""
                htmlFor="house">Selecciona la casa:</label>
            <select
                className=""
                name="house"
                id="house"
                value= {props.filterHouse}
                onChange={handleOnChange}
                >


                
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin </option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="all">Todos</option>
            </select>

        </>
    );
 }


export default FilterByHouse