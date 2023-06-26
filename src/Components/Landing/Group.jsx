import { Container } from 'react-bootstrap';
import { getGroupService } from '../../Services/GroupService';
import { useQuery } from 'react-query';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

export default function Group() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { data, isLoading } = useQuery(
    ['landing-group', page],
    async () => await getGroupService(page, 12),
    {
      keepPreviousData: true,

      onSuccess: (data) => {
        setPageCount(Math.ceil(data.count / data.limit));
      },
    }
  );

  return (
    <Container className="py-2" id='groups'>
      <div className="w-full border-bottom pb-2">
        <h2>Group</h2>
      </div>

      <div className="row py-3 g-3">
        {isLoading ? (
          <Loading />
        ) : (
          data &&
          data.groups.map((item, index) => (
            <div className="col-md-2 col-6" key={index}>
              <div className="card rounded-4">
                <img
                  src={item.image_url}
                  className="img-fluid img-thumbnail rounded-4"
                  alt="..."
                />

                <Link
                  to={`groups/${item.name}`}
                  className="text-white stretched-link"
                ></Link>
              </div>
              <div className="my-2 mx-1 text-center">
                <span
                  className="fs-6 fw-light"
                  style={{
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                    overflow: 'hidden',
                  }}
                >
                  {item.title}
                </span>
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
