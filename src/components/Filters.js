import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterByHouse from './FilterByHouse';
import FilterByAlive from './FilterByAlive';

import '../styles/Filters.scss';

function Filters (props){
return (
<div className='filters'>
    <FilterByName filterName ={ props.filterName}   
    handleFilterName = { props.handleFilterName} handleSubmit = {props.handleSubmit}  dataCharacter={props.dataCharacter} />
    <FilterByHouse 
    filterHouse = { props.filterHouse}
    handleFilterHouse = { props.handleFilterHouse}
    />


    <FilterByGender 
    filterGender= { props.filterGender}
    
    handleFilterGender= { props.handleFilterGender} />

<FilterByAlive  filterAlive={props.filterAlive}
handleFilterAlive = { props.handleFilterAlive} />
<button
        type="reset"
        onClick={props.handleReset}
        className={`reset ${props.selectValue}`}
      >
        <i className="fas fa-trash-alt"></i>Eliminar búsqueda
      </button>
    



  </div>  
)


 }

export default Filters; 