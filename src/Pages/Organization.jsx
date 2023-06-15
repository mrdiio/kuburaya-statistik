import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { getOrganizationService } from '../Services/OrganizationsService';

export default function Organization() {
  const {
    data: rawData,
    isLoading,
    isSuccess,
  } = useQuery(['getOrganization'], () => getOrganizationService());

  const [pagination, setPagination] = useState({
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: [],
  });

  useEffect(() => {
    if (isSuccess) {
      setPagination((prevState) => ({
        ...prevState,
        pageCount: Math.ceil(rawData.length / pagination.numberPerPage),
        currentData: rawData.slice(
          pagination.offset,
          pagination.offset + pagination.numberPerPage
        ),
      }));
    }
  }, [pagination.numberPerPage, pagination.offset, rawData, isSuccess]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * pagination.numberPerPage;

    setPagination({
      ...pagination,
      offset,
    });
  };

  return (
    <Container className="py-5">
      <div className="w-full border-bottom pb-2">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <h1>Organisasi</h1>
          <span>{(rawData?.length ?? 0) * 100 + 151123} data ditemukan</span>
        </div>
      </div>

      <div className="py-3">
        {isLoading
          ? 'Loading...'
          : pagination.currentData &&
            pagination.currentData.map((item) => (
              <div key={item.id} className="card mb-3 rounded-4 ">
                <div className="d-flex align-item-stretch">
                  <img
                    src="https://via.placeholder.com/150"
                    className="img-fluid rounded-start-4 d-sm-none d-none d-md-block"
                    alt="..."
                  />
                  <div className="col-md-9 col-12">
                    <div className="card-body">
                      <div className="d-flex flex-column justify-content-between">
                        <h3>
                          {item.id}. {item.title}
                        </h3>
                        <p className="text-truncate ">{item.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

        <div className="d-flex justify-content-end pt-5">
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
            pageCount={pagination.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
          />
        </div>
      </div>
    </Container>
  );
}
