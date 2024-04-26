import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/portfolioLogo.svg";
import instagram from "../assets/img/Platform=Instagram, Color=Negative.svg";
import linkedin from "../assets/img/Platform=LinkedIn, Color=Negative.svg";
import github from "../assets/img/Platform=Github, Color=Negative.svg";
// import x from "../assets/img/Platform=X (Twitter), Color=Negative.svg";
import whatsup from "../assets/img/Platform=WhatsApp, Color=Negative.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pt-5">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/rawaa_mhmd/">
                <img src={instagram} alt="Icon" />
              </a>
              <a href="https://github.com/rawaabaessa">
                <img src={github} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/rawaa-baessa-28a658274/">
                <img src={linkedin} alt="Icon" />
              </a>
              <a href="https://wa.me/967739665833">
                <img src={whatsup} alt="Icon" />
              </a>
              {/* <a href="#">
                <img src={x} alt="Icon" />
              </a> */}
            </div>
            <p>Copyright 2024. Rawaa Baessa</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
