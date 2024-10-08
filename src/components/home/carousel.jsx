import React from 'react'; 
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from "../../assets/bg.png";  // Use your background image path
import img1 from "../../assets/bg.png";
import img2 from "../../assets/bg.png";
import img3 from "../../assets/bg.png";
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "Ambe International - Recruitment and Manpower Solutions",
    text: "ARE YOU LOOKING FOR OVERSEAS JOBS?",
    image: img1,
  },
  {
    title: "Ambe International - Recruitment and Manpower Solutions",
    text: "ARE YOU LOOKING FOR OVERSEAS JOBS?",
    image: img1,
  },
  {
    title: "Ambe International - Recruitment and Manpower Solutions",
    text: "ARE YOU LOOKING FOR OVERSEAS JOBS?",
    image: img1,
  },
  
];

const CustomCarousel = () => {
  return (
    <Container
      fluid
      className="p-0 position-relative"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Dark overlay
          zIndex: 1,
        }}
      ></div>

      <Carousel
        interval={3000}
        indicators={true}  // Enable indicators (dots)
        style={{ position: 'relative', zIndex: 2 }}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row
              className="d-flex align-items-center justify-content-center "
              style={{ minHeight: '100vh' }}  // Full height carousel
            >
              {/* Center content */}
              <Col md={8} className="text-center text-white p-4">
                <h2 className="mb-3 text-4xl font-bold text-white">
                  {slide.title}
                </h2>
                <p className="mb-4 text-white">
                  {slide.text}
                </p>
                <Link to="/quick-register">
                  <Button className="btn btn-danger px-3 py-1">  {/* Red button */}
                    Apply Now
                  </Button>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CustomCarousel;
