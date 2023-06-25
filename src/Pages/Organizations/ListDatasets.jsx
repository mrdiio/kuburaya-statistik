import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getDatasetsByOrganizationService } from '../../Services/OrganizationsService';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export function ListDatasetsOrganizations() {
  const { id } = useParams();

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { data, isLoading } = useQuery(
    ['list-datasets-organizations', { id, page }],
    async () => {
      return await getDatasetsByOrganizationService(id, page, 20);
    },
    {
      staleTime: 1000 * 60 * 60,
      keepPreviousData: true,
      onSuccess: (data) => {
        console.log(data.datasets);
        setPageCount(Math.ceil(data.count / data.limit));
      },
    }
  );

  return (
    <Container className="py-5">
      <div className="w-full border-bottom pb-2">
        <div className="d-flex flex-column flex-wrap justify-content-between ">
          <h2>{data?.datasets[0].organization.title}</h2>
          <small className="text-body-secondary">
            {data?.count ?? 0} data ditemukan
          </small>
        </div>
      </div>

      {/* create list of data */}

      <div className="row py-3 g-3">
        {isLoading ? (
          <div style={{ height: '50vh' }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          data.datasets.map((item, index) => (
            <div className="col-md-12" key={index}>
              <div className="card rounded-4">
                <div className="d-flex justify-content-center">
                  <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <div className="d-flex gap-2">
                      <span className="badge text-bg-info fw-normal">
                        {item.tags.length} Tags
                      </span>

                      <span className="badge text-bg-info fw-normal">
                        {item.resources.length} Resources
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

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
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={(e) => setPage(e.selected + 1)}
          />
        </div>
      </div>
    </Container>
  );
}
