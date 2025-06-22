import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ChangeLanguage } from "./ChangeLanguage";
import { Mode } from "./Mode";
import logoDark from "../assets/img/portfolioLogo.svg";
import logoLight from "../assets/img/portfolioLogo-light.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import cookies from "js-cookie";

export const NavBar = () => {
  const { t } = useTranslation();
  const currentLang = cookies.get("i18next") || "en";
  const mode = cookies.get("mode") || "dark";
  const [theme, setTheme] = useState(mode);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("#footer-img").src = "portfolioLogo.svg";
    } else {
      document.querySelector("#footer-img").src = "portfolioLogo-light.svg";
    }
  }, [theme]);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={theme === "dark" ? logoDark : logoLight} loading="lazy" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className={currentLang === "en" ? "align-items-baseline" : ""}
            id="basic-navbar-nav"
          >
            <Nav
              className={currentLang === "ar" ? "ms-auto" : "me-auto"}
              id="navbar"
            >
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                {t("Home")}
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                {t("About Me")}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                {t("Skills")}
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                {t("Projects")}
              </Nav.Link>
              <Nav.Link href="#"></Nav.Link>
            </Nav>
            <span className="navbar-text gap-3">
              <div
                style={{
                  margin: currentLang === "ar" ? "0 10px 0 0" : "0 0 0 10px",
                  display: "flex",
                  gap: "15px",
                  // padding: "0px",
                }}
              >
                <ChangeLanguage theme={theme} />
                <Mode theme={theme} setTheme={setTheme} />
              </div>

              <HashLink to="#connect">
                <button className="vvd">
                  <span>{t("Let’s Connect")}</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
