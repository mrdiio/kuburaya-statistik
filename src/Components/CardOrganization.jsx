import { Link } from 'react-router-dom';
import kuburayaLogo from '../assets/Images/kuburaya-logo.png';

export default function CardOrganization({ data }) {
  return (
    <div className="col-md-3 col-6">
      <div className="card rounded-4 h-100">
        <div className="d-flex justify-content-center pt-3">
          <img
            // src={data.image_url}
            src={kuburayaLogo}
            className="img-fluid"
            width={140}
            alt="..."
            crossOrigin="anonymous"
          />
        </div>

        <div className="card-body">
          <h6 className="card-title">{data.title}</h6>
        </div>
        <div className="card-footer border-0 pb-3 d-flex justify-content-end">
          <Link
            to={`/organizations/${data.name}`}
            className="btn bg-cyan-600 btn-sm stretched-link"
          >
            {data.total_dataset} Datasets
          </Link>
        </div>
      </div>
    </div>
  );
}
