import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { getOrganizationService } from '../Services/OrganizationsService';
import { useQuery } from 'react-query';

export default function Organization() {
  const {
    data: rawData,
    isLoading,
    isSuccess,
  } = useQuery(
    ['getOrganization'],
    async () => await getOrganizationService(),
    {
      staleTime: 1000 * 60 * 60,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const [pagination, setPagination] = useState({
    offset: 0,
    numberPerPage: 12,
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

      <div className="row py-3 g-3">
        {isLoading
          ? 'Loading...'
          : pagination.currentData &&
            pagination.currentData.map((item) => (
              <div className="col-md-3 col-6" key={item.id}>
                <div className="card rounded-4 h-100">
                  <div className="d-flex justify-content-center pt-3">
                    <img
                      src="https://satudata.kuburayakab.go.id/uploads/group/2021-11-23-195547.630282logokkr-512.png"
                      className="img-fluid"
                      width={140}
                      alt="..."
                    />
                  </div>

                  <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                  </div>
                  <div className="card-footer border-0 pb-3 d-flex justify-content-end">
                    <a
                      href="#"
                      className="btn btn-success btn-sm stretched-link"
                    >
                      N Datasets
                    </a>
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
