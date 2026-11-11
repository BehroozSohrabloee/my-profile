import { useLocalization } from
  "../../localization/LocalizationContext";

import skillsData from "./skillsData";

import "./Skills.css";

const Skills = () => {
  const { language, t } = useLocalization();

  const isRTL = language === "fa";

  return (
    <section
      id="skills"
      className={`skills-section ${isRTL ? "skills-rtl" : ""}`}
    >
      <div className="skills-container">

        {/* Header */}

        <div className="skills-header">

          <span className="skills-subtitle">
            {t.skills.subtitle}
          </span>

          <h2 className="skills-title">
            {t.skills.title}
          </h2>

          <p className="skills-description">
            {t.skills.description}
          </p>

        </div>

        {/* Skills Grid */}

        <div className="skills-grid">

          {skillsData.map((category) => {

            const Icon = category.icon;

            return (
              <article
                className="skill-card"
                key={category.id}
              >

                <div className="skill-card-header">

                  <div className="skill-icon">
                    <Icon size={24} />
                  </div>

                  <h3>
                    {category.title[language]}
                  </h3>

                </div>

                <p className="skill-card-description">
                  {category.description[language]}
                </p>

                <div className="skill-tags">

                  {category.skills.map((skill) => (
                    <span
                      className="skill-tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;