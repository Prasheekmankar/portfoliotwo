import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Card() {
  return (
    <div className="overlap">
      <Container className=" col-lg-8 col-md-8 col-sm-8">
        <Row lg={6} className="justify-content-md-center">
          <Col xs lg="2">
            <h1 style={{ color: "aqua" }}>Wireless</h1>
          </Col>
          <Col xs lg="3">
            <h6 style={{ justifyContent: "center" }}>
              Wireless Headphones Brand in India 2021
            </h6>
          </Col>
        </Row>
        <Row lg={6} md={6}>
          <Col lg={4} md={4}>
            <img
              className="cardimg"
              src="https://m.media-amazon.com/images/I/61y+b4M0RZL._AC_SL1200_.jpg"
              alt="speakers"
            />
          </Col>

          <Col lg={4} md={4}>
            <img
              className="cardimg"
              src="https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw91dd943d/images/marshall/headphones/major-iv/high-res/pos-marshall-major-iv-black-01.png"
              alt="headphone"
            />
          </Col>

          <Col lg={4} md={4}>
            <img
              className="cardimg"
              src="https://5.imimg.com/data5/AN/WF/IC/SELLER-26459648/sony-bluetooth-headset-500x500.jpg"
              alt="headphone"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
