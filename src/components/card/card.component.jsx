import React from 'react'
import './card.styles.css'

export const Card = (props) =>(
  <div className='card-container'>


<img alt="robot" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
<h2 >{props.monster.name}</h2>
<p>{props.monster.email}</p>
<small>{props.monster.address.city}</small>



  </div>
)