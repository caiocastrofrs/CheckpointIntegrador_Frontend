import './style.scss';
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <>
    <Carousel variant="dark">
          <Carousel.Item>
            <Row>
              <Col md={3} sm={6}>
                <img
                  className="d-block w-100"
                  src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
                  alt="Second slide"
                />
              </Col>
              <Col md={3} sm={6} className="d-none d-sm-block">
                <img
                  className="d-block w-100"
                  src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
                  alt="Second slide"
                />
              </Col>
              <Col md={3} sm={6} className="d-none d-md-block">
                <img
                  className="d-block w-100"
                  src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
                  alt="Second slide"
                />
              </Col>
           </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={3} sm={6}>
                <img
                  className="d-block w-100"
                  src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
                  alt="Second slide"
                />
              </Col>
              <Col md={3} sm={6} className="d-none d-sm-block">
                <img
                  className="d-block w-100"
                  src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
                  alt="Second slide"
                />
              </Col>
              <Col md={3} sm={6} className="d-none d-md-block">
                <img
                  className="d-block w-100"
                  src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
                  alt="Second slide"
                />
              </Col>
           </Row>
          </Carousel.Item>
        </Carousel>
      {/* <Carousel interval="4000" variant="dark" className="my-5 carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
};

export default CarouselComponent;
