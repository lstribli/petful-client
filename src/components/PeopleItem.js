import React from 'react'; 

export default function PeopleItem(props) {
  return (
    <div className="person-item">
      <p>{props.name}</p>
    </div>
  )
}