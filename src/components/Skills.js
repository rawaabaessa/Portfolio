import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const { t } = useTranslation();
  const skills = [
    { id: 1, name: "fa-brands fa-html5", title: "HTML5" },
    { id: 2, name: "fa-brands fa-css3-alt", title: "CSS" },
    { id: 3, name: "fa-brands fa-square-js", title: "js" },
    { id: 4, name: "fa-brands fa-bootstrap", title: "Bootstrap" },
    { id: 5, name: "fa-brands fa-laravel", title: "Laravel" },
    { id: 6, name: "fa-brands fa-react", title: "React js" },
    { id: 7, name: "fa-brands fa-git-alt", title: "Git" },
    { id: 8, name: "fa-brands fa-php", title: "PHP" },
    { id: 9, name: "fa-brands fa-figma", title: "Figma" },
    { id: 10, name: "fa-solid fa-database", title: "MySql" },
  ];
  const skillsList = skills.map((skill) => {
    return (
      <Col xs={12} sm={4} md={3}>
        <i
          key={skill.id}
          title={skill.title}
          className={`skill-icon ${skill.name}`}
        ></i>{" "}
      </Col>
    );
  });

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="margin-btm">{t("My Skills")}</h2>
              <Container>
                <Row className="g-5">{skillsList}</Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
