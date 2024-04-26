import { Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, urls, skills }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" className="project-image" />
        <div className="proj-txtx">
          <h4 className={"mb-3"}>{title}</h4>
          {/* <span>{description}</span> */}
          {/* <a href={webUrl}><i></i></a> */}
          <Row className="gy-3">
            {skills.map((skill) => {
              return (
                <Col xs={4} sm={4} md={4}>
                  <i
                    style={{ fontSize: "50px" }}
                    key={skill.id}
                    title={skill.title}
                    className={skill.name}
                  ></i>{" "}
                </Col>
              );
            })}
          </Row>

          {urls.map((url) => {
            return (
              <div className="project-link-div mt-4">
                {" "}
                <a className="project-link" href={url.weburl} target="_blank">
                  Visit Website <ArrowRightCircle size={25} className="ms-1" />
                </a>
                <a
                  className="project-link"
                  href={url.githuburl}
                  target="_blank"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  View Code <i class="fa-brands fa-github ms-2"></i>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Col>
  );
};
