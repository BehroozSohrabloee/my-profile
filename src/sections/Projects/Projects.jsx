import {
    ArrowUpRight,
    // Github,
    ExternalLink,
    FolderCode,
} from "lucide-react";

import { useLocalization } from "../../localization/LocalizationContext";
import projectsData from "./ProjectsData";

import "./Projects.css";

function Projects() {
    const { language, direction } = useLocalization();

    const isRTL = direction === "rtl";

    return (
        <section
            id="projects"
            className={`projects-section ${isRTL ? "rtl" : "ltr"}`}
        >
            <div className="projects-container">

                {/* Section Header */}
                <div className="projects-header">

                    <span className="section-subtitle">
                        {language === "fa" ? "نمونه کارها" : "PORTFOLIO"}
                    </span>

                    <h2>
                        {language === "fa"
                            ? "پروژه‌های منتخب من"
                            : "Selected Projects"}
                    </h2>

                    <p>
                        {language === "fa"
                            ? "برخی از پروژه‌ها و تجربیات من در زمینه طراحی و توسعه نرم‌افزار."
                            : "A selection of my work and experience in software design and development."}
                    </p>

                </div>

                {/* Projects Grid */}
                <div className="projects-grid">

                    {projectsData.map((project) => (
                        <article className="project-card" key={project.id}>

                            <div className="project-card-top">

                                <div className="project-icon">
                                    <FolderCode size={25} />
                                </div>

                                <div className="project-links">

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="GitHub"
                                        >
                                            {/* <Github size={19} /> */}
                                        </a>
                                    )}

                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink size={19} />
                                        </a>
                                    )}

                                </div>

                            </div>

                            <span className="project-category">
                                {project.category[language]}
                            </span>

                            <h3>{project.title}</h3>

                            <p className="project-description">
                                {project.description[language]}
                            </p>

                            <div className="project-technologies">

                                {project.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}

                            </div>

                            <div className="project-card-footer">
                                <span>
                                    {language === "fa"
                                        ? "مشاهده جزئیات"
                                        : "Project Details"}
                                </span>

                                <ArrowUpRight size={18} />
                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;