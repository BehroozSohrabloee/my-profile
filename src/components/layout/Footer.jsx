import { ArrowUp } from "lucide-react";
import { useLocalization } from "../../localization/LocalizationContext";

import "./Footer.css";

function Footer() {
  const { language, direction } = useLocalization();

  const content = {
    en: {
      description: "Software Engineer & Developer",
      message: "Building meaningful digital experiences.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
    fa: {
      description: "مهندس نرم‌افزار و توسعه‌دهنده",
      message: "ساخت تجربه‌های دیجیتال ارزشمند.",
      quickLinks: "دسترسی سریع",
      home: "خانه",
      about: "درباره من",
      skills: "مهارت‌ها",
      projects: "پروژه‌ها",
      contact: "ارتباط با من",
      rights: "تمامی حقوق محفوظ است.",
      backToTop: "بازگشت به بالا",
    },
  };

  const t = content[language];

  const links = [
    { label: t.home, href: "#home" },
    { label: t.about, href: "#about" },
    { label: t.skills, href: "#skills" },
    { label: t.projects, href: "#projects" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <footer className={`footer ${direction}`}>
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              BS<span>.</span>
            </a>

            <h3>Behrooz Sohrabloee</h3>

            <p>{t.description}</p>
            <p className="footer-message">{t.message}</p>

            <div className="footer-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                {/* <Github size={19} /> */}
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                {/* <Linkedin size={19} /> */}
              </a>
            </div>
          </div>

          <div className="footer-navigation">
            <h4>{t.quickLinks}</h4>

            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#home" className="back-to-top">
            <ArrowUp size={17} />
            {t.backToTop}
          </a>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Behrooz Sohrabloee.
            {" "}{t.rights}
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;