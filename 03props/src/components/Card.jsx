import React from 'react'

export const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit amet consectur adipsting elit.</p>
      <button>View Profile</button>
      </div>
  )
}
export default Card