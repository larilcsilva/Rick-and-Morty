import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return <ReactPaginate 
  className='pagination justify-content-center gap-4 my-4'
  forcePage={pageNumber===1? 0 : pageNumber - 1 }
  nextLabel='Next'
  previousLabel='Prev'
  nextclassName='btn btn-light' 
  previousclassName='btn btn-light'
  pageclassName='page-item'
  pageLinkclassName='page-link'
  activeclassName='active'
  onPageChange={(data) => {
    setPageNumber(data.selected + 1);
  }}
   pageCount={info?.pages} 
   />;
};

export default Pagination;

// https://getbootstrap.com/docs/5.2/components/pagination/ 
// https://www.npmjs.com/package/react-paginate