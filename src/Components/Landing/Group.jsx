import { Container } from 'react-bootstrap';
import { getGroupService } from '../../Services/GroupService';
import { useQuery } from 'react-query';
import { useState } from 'react';
import Loading from '../Loading';
import Paginate from '../Paginate';
import CardGroup from '../CardGroup';

export default function Group() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { data, isLoading, isFetching } = useQuery(
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
    <Container className="py-2" id="groups">
      <div className="w-full border-bottom pb-2">
        <h2>Group</h2>
      </div>

      <div className="row py-3 g-3">
        {isLoading || isFetching ? (
          <Loading />
        ) : (
          data &&
          data.groups.map((item, index) => (
            <CardGroup data={item} key={index} />
          ))
        )}

        <div className="d-flex justify-content-end pt-5">
          <Paginate pageCount={pageCount} setPage={setPage} />
        </div>
      </div>
    </Container>
  );
}
