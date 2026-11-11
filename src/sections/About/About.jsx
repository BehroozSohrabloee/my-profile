import {
  Code2,
  Layers3,
  Monitor,
  Bot,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { useLocalization } from
  "../../localization/LocalizationContext";

import "./About.css";

const icons = [
  Code2,
  Layers3,
  Monitor,
  Bot,
];

const About = () => {
  const { language, t } = useLocalization();

  const isRTL = language === "fa";

  return (
    <section
      id="about"
      className={`about-section ${isRTL ? "about-rtl" : ""}`}
    >
      <div className="about-container">

        {/* Section Header */}
        <div className="about-header">

          <div className="about-label">
            <Sparkles size={16} />
            <span>{t.about.subtitle}</span>
          </div>

          <h2 className="about-title">
            {t.about.title}
          </h2>

        </div>

        {/* Main Content */}
        <div className="about-content">

          {/* Introduction */}
          <div className="about-description">

            <p className="about-paragraph">
              {t.about.description}
            </p>

            <p className="about-paragraph">
              {t.about.paragraph}
            </p>

            <a
              href="#projects"
              className="about-link"
            >
              {t.hero.primaryButton}
              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* Focus Areas */}
          <div className="about-focus">

            <h3 className="focus-title">
              {t.about.focusTitle}
            </h3>

            <div className="focus-grid">

              {t.about.focusItems.map((item, index) => {
                const Icon = icons[index];

                return (
                  <div
                    className="focus-card"
                    key={item.title}
                  >

                    <div className="focus-icon">
                      <Icon size={22} />
                    </div>

                    <h4>
                      {item.title}
                    </h4>

                    <p>
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom Information */}
        <div className="about-bottom">

          <div className="about-info-item">
            <span className="about-info-number">
              01
            </span>

            <span>
              {t.about.experience}
            </span>
          </div>

          <div className="about-info-item">
            <span className="about-info-number">
              02
            </span>

            <span>
              {t.about.projects}
            </span>
          </div>

          <div className="about-info-item">
            <span className="about-info-number">
              03
            </span>

            <span>
              {t.about.approach}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;