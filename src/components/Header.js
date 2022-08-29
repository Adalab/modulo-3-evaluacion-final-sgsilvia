import '../styles/Header.scss';

function Header (props){


return (

    
   <div  className='header'>  
{/* <img className= 'header__imgTitle'
src= {props.logo}
alt="logo Harry Potter"
title=" logo Harry Potter" 

/> */}

<div className='header__imgTitle'></div>
<img className= 'header__logoWizard'
src= {props.wizard}
alt="wizard"
title=" wizard"

/>
</div>)
 }

export default Header; 