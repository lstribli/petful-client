import React from 'react';

export default function PetItem(props) {
  const { name, age, breed, description, gender, imgUrl, story } = props
  
  return (
    <div key={name}>
      <p>age: {age}</p>
      <p>breed: {breed}</p>
      <p>Description: {description}</p>
      <p>gender: {gender}</p>
      <img src={imgUrl} alt="pet"></img>
      <p>name: {name}</p>
      <p>story: {story}</p>
    </div>
  )
}