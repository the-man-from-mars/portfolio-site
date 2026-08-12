import React from "react";
import "./Footer.css";
import { socialMediaLinks, contactPageData } from "../../portfolio";

const labels = {
  Github: "GitHub",
  LinkedIn: "LinkedIn",
  Gmail: "Email",
};

export default function Footer({ theme }) {
  const color = theme ? theme.secondaryText : undefined;
  return (
    <footer className="footer-div">
      <ul className="footer-links">
        {socialMediaLinks.map((media) => (
          <li key={media.name}>
            <a
              href={media.link}
              target={media.link.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{ color }}
            >
              {labels[media.name] || media.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-meta" style={{ color }}>
        {contactPageData.addressSection.display} · {new Date().getFullYear()}{" "}
        Yahya Rahimi
      </p>
    </footer>
  );
}
