import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { getOrganizationService } from '../../Services/OrganizationsService';
import { useQuery } from 'react-query';
import Paginate from '../../Components/Paginate';
import Loading from '../../Components/Loading';
import CardOrganization from '../../Components/CardOrganization';

export default function Organization() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { data, isLoading, isFetching } = useQuery(
    ['getOrganization', page],
    async () => await getOrganizationService(page, 16),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
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
        {isLoading || isFetching ? (
          <Loading />
        ) : (
          data.organizations.map((item) => (
            <CardOrganization data={item} key={item.id} />
          ))
        )}

        <div className="d-flex justify-content-end pt-5">
          <Paginate pageCount={pageCount} setPage={setPage} />
        </div>
      </div>
    </Container>
  );
}
