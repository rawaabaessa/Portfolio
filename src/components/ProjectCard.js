import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import cookies from "js-cookie";

export const ProjectCard = ({ title, imgUrl, urls, skills, fullImage }) => {
  const { t } = useTranslation();
  const currentLang = cookies.get("i18next") || "en";
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} loading="lazy" alt="" className="project-image" />
        <div className="proj-txtx">
          <a
            href={fullImage}
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h4 className={"mb-3"}>{t(title)}</h4>
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
                    {t("Visit Website")}
                    {currentLang === "ar" ? (
                      <ArrowLeftCircle className="me-2 arrow" size={25} />
                    ) : (
                      <ArrowRightCircle className="ms-2 arrow" size={25} />
                    )}
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
                    {t("View Code")}{" "}
                    <i
                      class="fa-brands fa-github"
                      style={{
                        margin:
                          currentLang === "ar"
                            ? "0 0.5rem 0 0"
                            : "0 0 0 0.5rem",
                      }}
                    ></i>
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
