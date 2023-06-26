import { Link } from 'react-router-dom';
import Loading from './Loading';
import Paginate from './Paginate';

export default function ListDatasets({ data, setPage, isFetching }) {
  return (
    <div className="row py-3 g-3">
      {isFetching ? (
        <Loading />
      ) : (
        data.datasets.map((item, index) => (
          <div className="col-md-12" key={index}>
            <div className="card rounded-4">
              <div className="d-flex justify-content-center">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h6 className="card-title">{item.title}</h6>
                      <div className="d-flex gap-2">
                        <span className="badge text-bg-secondary fw-normal">
                          {item.tags.length} Tags
                        </span>

                        <span className="badge text-bg-warning fw-normal">
                          {item.resources.length} Resources
                        </span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="h-100 d-flex justify-content-end align-items-center">
                        <Link
                          to={`/datasets/${item.name}`}
                          className="btn bg-cyan-600 btn-sm"
                        >
                          Lihat Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="d-flex justify-content-end pt-5">
        <Paginate
          pageCount={Math.ceil(data.count / data.limit)}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
