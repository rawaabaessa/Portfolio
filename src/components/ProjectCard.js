import { Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  urls,
  skills,
  fullImage,
}) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" className="project-image" />
        <div className="proj-txtx">
          <a
            href={fullImage}
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h4 className={"mb-3"}>{title}</h4>
          </a>

          {/* <span>{description}</span> */}
          {/* <a href={webUrl}><i></i></a> */}
          <Row className="gy-3 justify-content-center">
            {skills.map((skill) => {
              return (
                <Col xs={4} sm={4} md={4}>
                  <i
                    key={skill.id}
                    title={skill.title}
                    className={`project-skills ${skill.name}`}
                  ></i>{" "}
                </Col>
              );
            })}
          </Row>

          {urls.map((url) => {
            return (
              <div className="project-link-div">
                {url.weburl !== "#" ? (
                  <a
                    className="project-link"
                    href={url.weburl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Visit Website{" "}
                    <ArrowRightCircle className="ms-1 arrow" size={25} />
                  </a>
                ) : (
                  ""
                )}
                {url.githuburl !== "#" ? (
                  <a
                    className="project-link"
                    href={url.githuburl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    View Code <i class="fa-brands fa-github ms-2"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Col>
  );
};
