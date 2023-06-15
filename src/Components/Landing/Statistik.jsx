import { Container } from 'react-bootstrap';

export default function Statistik() {
  const data = [
    {
      title: 'Datasets',
      value: 100,
    },
    {
      title: 'Organisasi',
      value: 100,
    },
    {
      title: 'Group',
      value: 100,
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
                  <a href="#" className="btn btn-primary btn-sm ">
                    Lihat Semua
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
