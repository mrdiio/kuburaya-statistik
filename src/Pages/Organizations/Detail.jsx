import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getDatasetsByOrganizationService } from '../../Services/OrganizationsService';
import { useParams } from 'react-router-dom';
import ListDatasets from '../../Components/ListDatasets';
import Loading from '../../Components/Loading';

export function ListDatasetsOrganizations() {
  const { slug } = useParams();

  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useQuery(
    ['list-datasets-organizations', { slug, page }],
    async () => {
      return await getDatasetsByOrganizationService(slug, page, 20);
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Container className="py-5">
      <div className="w-full border-bottom pb-2">
        <div className="d-flex flex-column flex-wrap justify-content-between ">
          <h2>{data?.title}</h2>
          <small className="text-body-secondary">
            {data?.count ?? 0} data ditemukan
          </small>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <ListDatasets data={data} setPage={setPage} isFetching={isFetching} />
      )}
    </Container>
  );
}
