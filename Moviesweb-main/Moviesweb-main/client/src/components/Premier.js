import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Premier() {
  return (
    <div style={{ marginBottom: "20px", background: "gray" }}>
      <Container>
        <h2
          style={{
            textAlign: "center",
            color: "#E50B2B ",
            fontSize: "px",
            fontWeight: "bold",
            paddingTop: "10px",
          }}
        >
          P R E M I E R
        </h2>
        <Carousel fade variant="dark" style={{ paddingBottom: "5%" }}>
          <Carousel.Item>
            <CardGroup>
              <Card style={{ background: "gray", border: "none" }}>
                <Card.Img
                  style={{ height: "250px", width: "250px" }}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5R04WGMQE82zL6Lhsc2b7Iq-H5ghV7QEwxxgmYIWnZnfsD4FWIihlliSDY7i0qxY_74g&usqp=CAU"
                />
              </Card>
              <Card style={{ background: "gray", border: "none" }}>
                <Card.Img
                  style={{ height: "250px", width: "250px" }}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5R04WGMQE82zL6Lhsc2b7Iq-H5ghV7QEwxxgmYIWnZnfsD4FWIihlliSDY7i0qxY_74g&usqp=CAU"
                />
              </Card>
              <Card style={{ background: "gray", border: "none" }}>
                <Card.Img
                  style={{ height: "250px", width: "250px" }}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5R04WGMQE82zL6Lhsc2b7Iq-H5ghV7QEwxxgmYIWnZnfsD4FWIihlliSDY7i0qxY_74g&usqp=CAU"
                />
              </Card>
              <Card style={{ background: "gray", border: "none" }}>
                <Card.Img
                  style={{ height: "250px", width: "250px" }}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5R04WGMQE82zL6Lhsc2b7Iq-H5ghV7QEwxxgmYIWnZnfsD4FWIihlliSDY7i0qxY_74g&usqp=CAU"
                />
              </Card>
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item>
            <CardGroup>
              <Card style={{ background: "gray", border: "none" }}>
                <Card.Img
                  style={{ height: "250px", width: "250px" }}
                  variant="top"
                  src="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/d517ae40ec1a6837fb755d865937ed07.jpg"
                />
              </Card>
              <Card style={{ background: "gray", border: "none" }}>
                <Card.Img
                  style={{ height: "250px", width: "250px" }}
                  variant="top"
                  src="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/d517ae40ec1a6837fb755d865937ed07.jpg"
                />
              </Card>
              <Card style={{ background: "gray", border: "none" }}>
                <Card.Img
                  style={{ height: "250px", width: "250px" }}
                  variant="top"
                  src="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/d517ae40ec1a6837fb755d865937ed07.jpg"
                />
              </Card>
              <Card style={{ background: "gray", border: "none" }}>
                <Card.Img
                  style={{ height: "250px", width: "250px" }}
                  variant="top"
                  src="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/d517ae40ec1a6837fb755d865937ed07.jpg"
                />
              </Card>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
export default Premier;
