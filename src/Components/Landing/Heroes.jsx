import { Container } from 'react-bootstrap';

export default function Heroes() {
  return (
    <div className="bg-success">
      <Container className='py-5'>
        <div className="row flex-lg-row-reverse align-items-center py-5 text-white">
          <div className="col-sm-12 col-lg-6">
            <img
              src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png"
              alt="bootsrap themes"
              className="d-block mx-lg-auto img-fluid"
              width={700}
              height={500}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>

            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-dark btn-lg px-4 me-md-2"
              >
                Primary
              </button>
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