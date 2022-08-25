import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Entertainment() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Container>
        <Carousel fade variant="dark">
          <Carousel.Item>
            <CardGroup>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0548/8404/0870/products/TheFrontLine-WarMoviePoster_821048c5-929c-44af-97ea-75dc51073889_1200x.jpg?v=1617381737"
                />
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0548/8404/0870/products/TheFrontLine-WarMoviePoster_821048c5-929c-44af-97ea-75dc51073889_1200x.jpg?v=1617381737"
                />
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0548/8404/0870/products/TheFrontLine-WarMoviePoster_821048c5-929c-44af-97ea-75dc51073889_1200x.jpg?v=1617381737"
                />
              </Card>
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item>
            <CardGroup>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"
                />
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="	https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"
                />
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"
                />
              </Card>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
export default Entertainment;
