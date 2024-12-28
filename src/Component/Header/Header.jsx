import React, { useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import img3 from "../../assets/3.png";
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typed from "typed.js"; 

const Header = () => {
  const typedElement = useRef(null);

  useEffect(() => {
   
    const options = {
      strings: [
        "Top Picks for Men: Fresh, Woody, Spicy.",
        "Top Picks for Women: Floral, Fruity, Oriental.",
      ],
      typeSpeed: 50, 
      backSpeed: 30, 
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => typed.destroy();
  }, []); 

  return (
    <div>
      <Carousel interval={7000} indicators={false} pause={false} className="custom-carousel">
        {/* First Slide */}
        <Carousel.Item>
          <section className="main-section-1">
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="main-text">
                    <h2>Whisper Elegance, Wear Whispry</h2>
                    <p className="text-white pt-2 pb-4">
                      Step into the enchanting world of Whispry, where luxury
                      meets passion. Our curated collection of fragrances is
                      designed to captivate your senses and redefine
                      sophistication.
                    </p>
                    <Link to="/">
                      <button className="btn">Explore Whispry</button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <section className="main-section-2">
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="main-text">
                    <p className="desc">
                      Be the First to Experience New Scents
                    </p>
                    <p className="sub-desc">
                      Our latest collection is here, featuring irresistible
                      blends inspired by the beauty of nature and the elegance
                      of modern luxury. Limited availability—don’t miss out!
                    </p>
                    <div className="button-container">
                      <button className="menu">
                        <a href="#explore-menu">Explore New Arrivals</a>
                      </button>
                      <button className="shop-now">
                        <a href="#contact-us">Shop Now</a>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <section className="main-section-3">
            <Container>
              <Row>
                <img src={img3} className="img" alt="Main" />

                <Col lg={5}>
                  <div className="main-text">
                    <h2>Personalized Fragrances for Every Story</h2>
                    <p className="desc">
                      Celebrate your uniqueness with scents crafted to
                      complement your personality. From bold, daring notes for
                      him to delicate, enchanting aromas for her.
                    </p>
                    <span className="sub-desc" ref={typedElement}></span> 
                    <div className="button-container">
                      <button className="btn">
                        <a href="#explore-menu">Shop for Him</a>
                      </button>
                      <button className="btn">
                        <a href="#contact-us">Shop for Her</a>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
