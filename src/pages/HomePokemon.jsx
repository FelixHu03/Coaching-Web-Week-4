import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './body.css';
import IvysaurImage from './gambar.jpg';


const HomePokemon = () => {
  return (
    <div className="card" style={{ width: '18rem'}}>
    <img  src="IvysaurImage" alt="Pokemon Ivysaur" />
    <div className="card-body">
      <h5 className="card-title text-danger">Pokemon Ivysaur</h5>
  
      <a href="./Static" className="btn btn-primary">Next</a>
    </div>
  </div>
  )
}

export default HomePokemon