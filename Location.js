import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup'
import Navbar from '../components/Navbar/Navbar'
import "./Pages.css"

const Location = () => {

  let[id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let [results, setResults ] = useState([]);
  let { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;
  
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
      data.residents.map((x)=>{
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
    {name===""? "Unknown" : name} </span></h1>
    <h5 className='text-center'> {dimension===""? "Unknown" : dimension}</h5>
    <h6 className='text-center'> {type===""? "Unknown" : type}</h6>
    </div>
  <div className='row'>
    <div className='col-lg-3 col-12'>
      <h4 className='text-center'>
      Choose Location
      </h4>
      <InputGroup setID={setID }name="Location" total={126} />
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

export default Location

//https://getbootstrap.com/docs/5.2/forms/input-group/