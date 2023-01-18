import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from '../components/Cards/Cards'
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./Pages.css"

const Characters = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className='row'>
          <div className='col-lg-3 col-12'>
            <Search setSearch={setSearch} />
          </div>
          <div className='col-lg-8 col-12'>
            <div className='row align-items-stretch'>
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default Characters;


// https://rickandmortyapi.com/documentation/#rest
