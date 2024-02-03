import { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
    
function PokemonStatic() {
  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [baseexperience, setBaseexperience] = useState(0)
  const [weight, setWeight] = useState(0)
  const [height, setHeight] =useState(0)
  const [order, setOrder] =useState('')
  const [is_default, setIs_default] = useState('')
  const [location_area_encounters, setLocation_area_encounters] =useState('')
  const [abilities, setAbilities] = useState([])
  const [types, setTypes] = useState([])
  
const data1 = async () => {
  const ras = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
  
  setId(ras.data.id)
  setName(ras.data.name)
  setBaseexperience(ras.data.base_experience)
  setHeight(ras.data.height)
  setWeight(ras.data.weight)
  setOrder(ras.data.order)
  setIs_default(ras.data.is_default)
  setLocation_area_encounters(ras.data.location_area_encounters)
  
  ras.data.abilities.map((data) => {
    console.log(data)

  })
  ras.data.types.map((data2) => {
    console.log(data2)

  })
}
useEffect( () => {
  data1()
}, []);

  return (

<div className="card text-success" style={{ width: '18rem' }}>
  <div className="card-body">
    <h3 className="card-title">Pokemon</h3>
    <h5 className="card-subtitle mb-2 text-body-secondary">Name: {name}</h5>
    <li className="card-text">ID: {id}</li>
    <li className="card-text">Base Experience : {baseexperience}</li>
    <li className="card-text">height : {height}</li>
    <li className="card-text">weight : {weight}</li>
    <li className="card-text">order : {order}</li>
    <li className="card-text"> is default : {is_default} </li>
    {abilities.map((data) => (
      <li>{data.ability.name}</li>
    ))} <br />
    types:
    {types.map((data2) => (
      <li>{data.type.name}</li>
    ))} <br />
    <li>location area encounters : <a href="{location_area_encounters}">lokasi</a></li>

    <a href="/" className="btn btn-primary">previous</a>


  </div>
</div>
  )
}

export default PokemonStatic
