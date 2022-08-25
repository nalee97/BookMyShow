import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <img
            style={{
              height: "300px",
              width: "100%",
            }}
            className="d-block w-100"
            src="https://in.bmscdn.com/promotions/cms/creatives/1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px", width: "100%" }}
            className="d-block w-100"
            src="https://cdn.thearthunters.com/wp-content/uploads/old/201205272/4.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px", width: "100%" }}
            className="d-block w-100"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-136d9899e560e58618976cee9d12c3a3_screen.jpg?ts=1599629599"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default SliderImages;
