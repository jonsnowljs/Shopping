import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useHistory } from 'react-router-dom';

// pages is total pages, page is current page
const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  const history = useHistory();

  const handlePageChange = (event, value) => {
    history.push(
      !isAdmin
        ? keyword
          ? `/search/${keyword}/page/${value}`
          : `/page/${value}`
        : `/admin/productlist/${value}`
    );
  };

  return (
    pages > 1 && (
      <Pagination
        count={pages}
        page={page}
        color="primary"
        onChange={handlePageChange}
      ></Pagination>
    )
  );
};

export default Paginate;
