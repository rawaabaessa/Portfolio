import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
  return (
    <section className="About" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About</h2>
              <Container>
                <Row className="g-5">
                  <p className="mt-5">
                    I am a web developer with specializing in both front-end and
                    back-end development, along with database management, I am
                    committed to crafting outstanding user experiences by
                    implementing sophisticated design elements that engage users
                    and ensure user-friendly applications. Continuously seeking
                    personal growth and acquiring new knowledge and skills, my
                    unwavering aim is to excel in my field and deliver
                    cutting-edge technological solutions
                  </p>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
