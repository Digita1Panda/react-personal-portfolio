import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profile from "../assets/images/profile.jpg";
import TypeWriter from "typewriter-effect";

const Header = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="headline title">Hi, Welcome to my Portfolio </span>
            <h1>
              {`I am Kwok `}
              <span className="text">
                <TypeWriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "I'm a Front-End Developer",
                      "I'm a Web Developer",
                    ],
                  }}
                />
              </span>
            </h1>
            <p>
              Transforming digital vision into seamless user-centric web
              experience through cutting edge development and innovation.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Talk <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col className="hero-col" xs={12} md={6} xl={5}>
            <div className="hero-img">
              <div className="img-box">
                <img src={profile} alt="header" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
