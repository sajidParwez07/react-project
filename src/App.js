import logo from './logo.svg';
import './App.css';
import data from './data.json';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
    <div>Name : {data.name}</div>
    <div>Email : {data.email}</div>
    <div>Website : {data.website}</div>
    <div><label>Country :</label>
    <select>
      {data.country.map((country) => {
        return <option key={country.id} value={country.id}>{country.name}</option>
      })}
    </select>
    </div>
  </div>
  );
}

export default App;
