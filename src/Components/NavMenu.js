import React from 'react'

const NavMenu= (props) =>
  <div>
    <header>
    <nav>
    <ul>
    {
      props.listOfItems.map(
        
        (el, i) =>  <div className='' key={i}>
          <li ><a href={el.link}>{el.title}</a>
          <ul>
            
            
            {el.dropdown ? el.dropdown.map((elt,i)=>
            <li><a href={elt.link}>{elt.title}</a></li>
              ):null}
            
          </ul>
          
          </li>
        </div>
      )
    }
    </ul>
    </nav>
</header>
  </div>

export default NavMenu