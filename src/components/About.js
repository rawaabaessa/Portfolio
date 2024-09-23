import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="About" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="margin-btm">{t("About Me")}</h2>
              <Container>
                <Row className="g-5">
                  <p className="mt-5 align-justify">
                    {t(
                      "I am a passionate web developer dedicated to delivering exceptional results. My primary objective is to constantly improve my skills and achieve excellence in this field. I strongly believe in continuous learning and professional development to remain at the forefront of the dynamic web design industry."
                    )}
                  </p>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        loading="lazy"
        alt="Image"
      />
    </section>
  );
};
