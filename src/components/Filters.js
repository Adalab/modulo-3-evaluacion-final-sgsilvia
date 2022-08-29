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

<FilterByAlive  filterByAlive ={ props.filterByAlive} handleFilterAlive = { props.handleFilterAlive} />

  </div>  
)


 }

export default Filters; 