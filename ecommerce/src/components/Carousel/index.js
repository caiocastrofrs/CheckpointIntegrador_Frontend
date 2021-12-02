import './style.scss';
import Carousel from 'react-bootstrap/Carousel'


const CarouselComponent = () => {
  return (
    <>
      <Carousel interval="4000" variant="dark" className="my-5 carousel">
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
      </Carousel>
    </>
  );
};

export default CarouselComponent;
