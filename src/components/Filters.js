import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterByHouse from './FilterByHouse';
import FilterByAlive from './FilterByAlive';


function Filters (props){
return (
<>
    <FilterByName filterName ={ props.filterName}   
    handleFilterName = { props.handleFilterName} handleSubmit = {props.handleSubmit}  dataCharacter={props.dataCharacter} />
    <FilterByHouse 
    filterHouse = { props.filterHouse}
    handleFilterHouse = { props.handleFilterHouse}
    />


    <FilterByGender 
    filterGender= { props.filterGender}
    
    handleFilterGender= { props.handleFilterGender} />

<FilterByAlive  filterByAlive ={ props.filterByAlive} handleFilterAlive = { props.handleFilterAlive} />

  </>  
)


 }

export default Filters; 