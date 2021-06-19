import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const CustomPagination = ({ setPage }) => {
  const handleChangePage = (page) => {
    setPage(page);
    window.scroll(0, 50);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        color: '#FE024E',
      }}
    >
      <Pagination
        count={4}
        shape="rounded"
        hideNextButton
        hidePrevButton
        onChange={(e) => handleChangePage(`${e.target.textContent - 1}`)}
        size="large"
      />
    </div>
  );
};

export default CustomPagination;
