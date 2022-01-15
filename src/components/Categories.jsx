import React from 'react'
import {useState} from 'react';

function Categories({items}) {
  const [activeItem,setActiveItem] = useState(null)
  const onSelectItem = (index) =>{
    setActiveItem(index)
  };
  const item = items && items.map((item,index) =>{
    return(
      <li className={activeItem === index ? "active" : null } onClick={()=> onSelectItem(index)} key={item}>{item}</li>
    )
  })

    return (
        <div>
        <div className="categories">
              <ul>
                <li onClick={()=> onSelectItem(null)} className={activeItem === null ? "active" : null }>Все</li>
                {item}
              </ul>
            </div>
        </div>
    )
}

export default Categories
