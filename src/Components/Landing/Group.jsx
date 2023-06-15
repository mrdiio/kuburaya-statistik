import { useQuery } from '@tanstack/react-query';
import { Container } from 'react-bootstrap';
import { getGroupService } from '../../Services/GroupService';

export default function Group() {
  const { data: rawData, isLoading } = useQuery(['landing-group'], async () =>
    getGroupService()
  );

  if (isLoading) return 'Loading ...';

  return (
    <Container className="py-2">
      <div className="w-full border-bottom pb-2">
        <h2>Group</h2>
      </div>

      <div className="row py-3 g-4">
        {rawData &&
          rawData.map((item, index) => (
            <div className="col-md-2" key={index}>
              <div className="card  rounded-4 bg-secondary">
                <img
                  src={
                    'https://satudata.kuburayakab.go.id/uploads/group/2022-10-09-203308.08290713perhubungandantransportasi.jpg'
                  }
                  className="img-fluid img-thumbnail rounded-4"
                  alt="..."
                />
                <a href="#" className="text-white stretched-link"></a>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
}
