import { Container } from 'react-bootstrap';
import heroesImg from '../../assets/Images/Heroes/Data report-pana.svg';

export default function Heroes() {
  return (
    <div className="bg-cyan-600">
      <Container className="py-4">
        <div className="row flex-lg-row-reverse align-items-center py-5 text-white">
          <div className="col-sm-12 col-lg-6">
            <img
              src={heroesImg}
              // src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png"
              alt="bootsrap themes"
              className="d-block mx-lg-auto img-fluid img-thumbnail bg-transparent rounded-5  mb-5 mb-lg-0"
              width={700}
              height={500}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Data Analytics Kabupaten Kubu Raya
            </h1>

            <p className="lead">
              Data sebagai basis utama yang akan terlihat menjadi sebuah peta
              kerja yang efektif, efisien, mutakhir di era digital dalam
              pengambilan keputusan.
            </p>

            <div className="pt-3 d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
