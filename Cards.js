import React from 'react';
import styles from "./Cards.modules.css";

const Cards = ({ results }) => {
  let display;
  console.log(results);

  if(results) {
    display = results.map(x=>{
      let { id, name, image, location, status} = x;
      return ( 
        
      <div key={id} className="col-lg-4 mb-2 p-4 position-relative my-4">
        <div className='box'>
          <img src={image} alt="" className={`${styles.img} img-fluid`} />
          <div className="content">
            <div className="fs-5 fw-bold mb-4 text-light">{name}</div>
            <div className="">
              <div className="fs-6 text-light">Last location</div>
              <div className="fs-5.5 text-light">{location.name}</div>
              </div>
            </div>
            {(()=> {
              if(status === "Dead"){
               return (
            <div className={`${styles.badge} position-absolute badge bg-danger`}>
            {status}
            </div>
               );
              }
              else if(status === "Alive"){
                return (
                  <div className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                  </div>
                     );
              } else {
                return (
                  <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                  </div>
                     );
              }
            })()}
          </div>
      </div>
      );
    });
  } else {
    display = "No Characters Found";
  }

return <>{display}</>;
};

export default Cards