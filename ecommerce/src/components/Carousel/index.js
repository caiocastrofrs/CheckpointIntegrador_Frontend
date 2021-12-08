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
        className="my-5 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  m-auto"
      >
        <Carousel.Item>
          <Col xs={{ span: 6, offset: 3 }} sm={{ span: 11, offset: 1 }}  md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}>
            <Row>
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
        <Carousel.Item>
          <Col xs={{ span: 6, offset: 3 }} sm={{ span: 11, offset: 1 }}  md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}>
            <Row>
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
