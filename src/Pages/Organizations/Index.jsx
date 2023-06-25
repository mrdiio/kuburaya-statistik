import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { getOrganizationService } from '../../Services/OrganizationsService';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export default function Organization() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { data, isLoading } = useQuery(
    ['getOrganization', page],
    async () => await getOrganizationService(page, 10),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setPageCount(Math.ceil(data.count / data.limit));
      },
    }
  );

  return (
    <Container className="py-5">
      <div className="w-full border-bottom pb-2">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <h1>Organisasi</h1>
          <span>{data?.count ?? 0} data ditemukan</span>
        </div>
      </div>

      <div className="row py-3 g-3">
        {isLoading
          ? 'Loading...'
          : data.organizations.map((item) => (
              <div className="col-md-3 col-6" key={item.id}>
                <div className="card rounded-4 h-100">
                  <div className="d-flex justify-content-center pt-3">
                    <img
                      src={item.image_url}
                      className="img-fluid"
                      width={140}
                      alt="..."
                    />
                  </div>

                  <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                  </div>
                  <div className="card-footer border-0 pb-3 d-flex justify-content-end">
                    <Link
                      to={`/organizations/${item.name}`}
                      className="btn btn-success btn-sm stretched-link"
                    >
                      {item.total_dataset} Datasets
                    </Link>
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
