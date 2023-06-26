import ReactPaginate from 'react-paginate';

export default function Paginate({ pageCount, setPage }) {
  return (
    <ReactPaginate
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName={'page-item px-3'}
      containerClassName={'pagination'}
      activeClassName={'active'}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={(e) => setPage(e.selected + 1)}
    />
  );
}
