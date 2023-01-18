import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup'
import Navbar from '../components/Navbar/Navbar'
import "./Pages.css"

const Episodes = () => {

  let [id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let [results, setResults] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then(res => res.json());
        })
      )
      setResults(a);
    })();
  }, [api]);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
      <div className='row mb-3'>
        <h1 className='text-center'> {" "}
          <span className='text' >
            {name === "" ? "Unknown" : name} </span></h1>
        <h5 className='text-center'>{air_date === "" ? "Unknown" : air_date}</h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'>
            Choose Episodes
          </h4>
          <InputGroup setID={setID} name="Episode" total={51} />
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards results={results} /> </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes

//https://getbootstrap.com/docs/5.2/forms/input-group/