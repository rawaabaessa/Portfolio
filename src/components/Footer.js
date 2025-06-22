import { Container, Row, Col } from "react-bootstrap";

export const Footer = ({ theme }) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pt-5">
          <Col size={12} sm={6} className="logo">
            <img
              src={"portfolioLogo.svg"}
              loading="lazy"
              alt="Logo"
              id="footer-img"
            />
          </Col>
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-end"
            id="social-icons"
          >
            <div className="social-icon">
              <a href="https://www.instagram.com/rawaa_mhmd/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/rawaabaessa" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rawaa-baessa-28a658274/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://wa.me/967739665833" target="_blank">
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
