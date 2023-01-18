import React from 'react'
import styles from "./Search.module.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <div className='App'>
    <div className='container'>
      
    <div className='row gap-3 my-2 justify-content-center'>
      <input 
    onChange={e=> {
      setSearch(e.target.value);
    }}
    placeholder="Search for Characters" type="text" className={styles.input} 
    />
      
      <div className='row justify-content-center'>
        <button onClick={e=>{e.preventDefault()}}className= {`${styles.button}`}>Search</button>
         </div>
          </div>
         </div>
      </div>
    
  
  );
};

export default Search
