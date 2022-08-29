import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterByHouse from './FilterByHouse';


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


  </>  
)


 }

export default Filters; 