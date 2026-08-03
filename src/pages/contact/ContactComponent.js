import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData, socialMediaLinks } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

const contactLinkLabels = {
  Github: "GitHub",
  LinkedIn: "LinkedIn",
  Gmail: "Email Me",
};

const onLinkEnter = (event, theme) => {
  const el = event.currentTarget;
  el.style.backgroundColor = theme.text;
  el.style.color = theme.body;
};

const onLinkLeave = (event, theme) => {
  const el = event.currentTarget;
  el.style.backgroundColor = "transparent";
  el.style.color = theme.text;
};

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Yahya Rahimi"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <div className="contact-links-div">
                  {socialMediaLinks.map((media) => (
                    <a
                      key={media.name}
                      className="contact-link-btn"
                      href={media.link}
                      target={
                        media.link.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel="noopener noreferrer"
                      style={{
                        color: theme.text,
                        borderColor: theme.text,
                      }}
                      onMouseEnter={(event) => onLinkEnter(event, theme)}
                      onMouseLeave={(event) => onLinkLeave(event, theme)}
                    >
                      <i
                        className={
                          media.link.startsWith("mailto")
                            ? "fas fa-envelope"
                            : `fab ${media.fontAwesomeIcon}`
                        }
                      ></i>
                      {contactLinkLabels[media.name] || media.name}
                    </a>
                  ))}
                </div>
                <div className="resume-btn-div">
                  <Button text="See My Resume" href="/resume" theme={theme} />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
