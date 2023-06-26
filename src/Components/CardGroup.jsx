import { Link } from 'react-router-dom';

export default function CardGroup({ data }) {
  return (
    <>
      <div className="col-md-2 col-6">
        <div className="card rounded-4">
          <img
            src={data.image_url}
            className="img-fluid img-thumbnail rounded-4"
            alt="..."
            // add cookie sameSite
            crossOrigin="anonymous"
          />

          <Link
            to={`groups/${data.name}`}
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
            {data.title}
          </span>
        </div>
      </div>
    </>
  );
}
