import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { detailDatasetService } from '../../Services/DatasetService';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function DatasetsDetail() {
  const { slug } = useParams();

  const { data } = useQuery(
    ['datasets-detail', slug],
    async () => await detailDatasetService(slug),
    {
      staleTime: 1000 * 60 * 60,
      onSuccess: (res) => {
        console.log(res);
      },
    }
  );

  return (
    <Container className="py-5">
      <div className="w-full border-bottom pb-0 pb-md-3 pb-2">
        <div className="d-flex flex-column flex-wrap justify-content-between gap-2 gap-md-3">
          <h2>{data?.title || <Skeleton width={500} />}</h2>
          <div className="d-flex gap-2 ">
            <div className="d-flex align-items-md-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
              </svg>
              {data?.organization.title || <Skeleton width={300} />}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-2 pt-3">
        <div className="d-flex gap-2">
          <small>Tags </small>
          <div className="d-flex flex-wrap gap-2">
            {data?.tags.map((tag) => (
              <span
                key={tag.id}
                className="badge text-bg-secondary text-uppercase "
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="d-flex align-items-md-center pt-2 gap-2">
          <small>Resources </small>
          <div className="d-flex flex-wrap gap-2">
            {data?.resources.map((resource) => (
              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm text-bg-danger text-uppercase"
                key={resource.id}
              >
                {resource.type}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
