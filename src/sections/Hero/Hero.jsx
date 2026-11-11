
import { ArrowUpRight } from "lucide-react";

import { useLocalization } from "../../localization/LocalizationContext";

import "./Hero.css";

import profileImage  from '../../assets/images/profile.png'

const Hero = () => {
    const { language, t } = useLocalization();

    const isRTL = language === "fa";

    return (
        <section
            id="home"
            className={`hero ${isRTL ? "hero-rtl" : ""}`}
        >
            <div className="hero-container">

                <div className="hero-content">

                    <p className="hero-greeting">
                        {t.hero.greeting}
                    </p>

                    <h1 className="hero-name">
                        {t.hero.name}
                        <span>.</span>
                    </h1>

                    <h2 className="hero-role">
                        {t.hero.role}
                    </h2>

                    <p className="hero-description">
                        {t.hero.description}
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="hero-primary-button"
                        >
                            {t.hero.primaryButton}
                            <ArrowUpRight size={18} />
                        </a>

                        <a
                            href="#contact"
                            className="hero-secondary-button"
                        >
                            {t.hero.secondaryButton}
                        </a>

                    </div>

                </div>

                <div className="hero-visual">

                    <div className="hero-glow"></div>

                    <div className="hero-image-card">

                        <div className="hero-avatar">
                            <img
                                src={profileImage}
                                alt="Behrooz Sohrabloee"
                                className="hero-profile-image"
                            />
                        </div>

                        <div className="hero-image-caption">

                            <span className="hero-image-name">
                                Behrooz Sohrabloee
                            </span>
                                <br></br>
                            <span className="hero-image-role">
                                Software Engineer
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;
