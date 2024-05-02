import { Container, Row, Col } from "react-bootstrap";
import logoDark from "../assets/img/portfolioLogo.svg";
import logoLight from "../assets/img/portfolioLogo-light.svg";
import instagram from "../assets/img/Platform=Instagram, Color=Negative.svg";
import linkedin from "../assets/img/Platform=LinkedIn, Color=Negative.svg";
import github from "../assets/img/Platform=Github, Color=Negative.svg";
import whatsup from "../assets/img/Platform=WhatsApp, Color=Negative.svg";

export const Footer = ({ theme }) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pt-5">
          <Col size={12} sm={6}>
            {/* <div className="footer-img"></div> */}
            <img src={"portfolioLogo.svg"} alt="Logo" id="footer-img" />
          </Col>
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-end"
            id="social-icons"
          >
            <div className="social-icon">
              <a href="https://www.instagram.com/rawaa_mhmd/" target="_blank">
                {/*  <img src={instagram} alt="Icon" /> */}
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/rawaabaessa" target="_blank">
                {/* <img src={github} alt="Icon" /> */}
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rawaa-baessa-28a658274/"
                target="_blank"
              >
                {/* <img src={linkedin} alt="Icon" /> */}
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://wa.me/967739665833" target="_blank">
                {/* <img src={whatsup} alt="Icon" /> */}
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <p>Copyright 2024. Rawaa Baessa</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
