import { Container } from 'react-bootstrap';
import { getGroupService } from '../../Services/GroupService';
import { useQuery } from 'react-query';

export default function Group() {
  const { data: rawData, isLoading } = useQuery(
    ['landing-group'],
    async () => await getGroupService(),
    {
      onSuccess: (data) => {
        console.log(data);
      },

      staleTime: 1000 * 60 * 60,
    }
  );

  if (isLoading) return 'Loading ...';

  return (
    <Container className="py-2">
      <div className="w-full border-bottom pb-2">
        <h2>Group</h2>
      </div>

      <div className="row py-3 g-3">
        {rawData &&
          rawData.map((item, index) => (
            <div className="col-md-2 col-6" key={index}>
              <div className="card rounded-4">
                <img
                  src={
                    'https://satudata.kuburayakab.go.id/uploads/group/2022-10-09-203308.08290713perhubungandantransportasi.jpg'
                  }
                  className="img-fluid img-thumbnail rounded-4"
                  alt="..."
                />

                <a href="#" className="text-white stretched-link"></a>
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
                  {item.company.name}
                </span>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
}
