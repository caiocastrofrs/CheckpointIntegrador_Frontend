import "./style.scss";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import CardProduto from "../CardProduto";
import useAxios from '../../hooks/index';

const CarouselComponent = () => {
 

  const produtos = useAxios('/produtos');

  const carrosselpg1 = produtos.slice(0,3);
  const carrosselpg2 = produtos.slice(3,6);
  

  const checkItemIndex = (index) => {
    if (index === 0) {
      return "";
    } else if (index === 1) {
      return "d-none d-sm-block";
    } else if (index === 2) {
      return "d-none d-md-block";
    }
  };
  return (
    <>
      <Carousel
        variant="dark"
        className="my-5 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10  m-auto"
      >
        <Carousel.Item >
          <Col className="justify-content-center d-inline-flex g-5" xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }}  md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 1 }}>
            <Row className="">
              {carrosselpg1 &&
                carrosselpg1.map((produto, index) => {
                  return (
                    <Col md={4} sm={6} className={checkItemIndex(index)}>
                      <CardProduto
                        key={produto.id}
                        produto={produto}
                        className="center-item"
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Carousel.Item>
        <Carousel.Item >
          <Col className="justify-content-center d-inline-flex g-5" xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }}  md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 1 }}>
            <Row className="">
              {carrosselpg2 &&
                carrosselpg2.map((produto, index) => {
                  return (
                    <Col md={4} sm={6} className={checkItemIndex(index)}>
                      <CardProduto
                        key={produto.id}
                        produto={produto}
                        className="center-item"
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselComponent;
