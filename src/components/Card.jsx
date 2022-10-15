import Language from "./Language";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";

const Card = () => {
  // console.log(data);
  return (
    <Container className="rounded-4 mt-4 p-4" style={{ background: "#B4CF66" }}>
      <h1 className="text-white my-4">Language</h1>
      <Row className="g-3 justify-content-center">
        {data.map((item, i) => {
          return (
            <Col sm={6} md={4} lg={3} key={i}>
              <Language {...item} />;{/* <Language item={item} />; */}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
