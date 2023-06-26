import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Statistik() {
  const data = [
    {
      title: 'Datasets',
      value: 100,
      link: '#datasets',
    },
    {
      title: 'Organisasi',
      value: 100,
      link: '/organizations',
    },
    {
      title: 'Group',
      value: 100,
      link: '#groups',
    },
  ];

  return (
    <Container className="py-5">
      <div className="w-full border-bottom pb-2">
        <h2>Statistik</h2>
      </div>

      <div className="row py-3 g-4">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card border-1 rounded-4">
              <div className="card-body">
                <h3 className="card-title text-sm">{item.title}</h3>
                <h1 className="card-text">{item.value}</h1>

                <div className="d-flex justify-content-end p-2">
                  {item.title === 'Group' ? (
                    <a href="#groups" className="btn bg-cyan-600 btn-sm">
                      Lihat
                    </a>
                  ) : (
                    <Link to={item.link} className="btn bg-cyan-600 btn-sm">
                      Lihat
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
