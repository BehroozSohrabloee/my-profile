import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

import { useLocalization } from "../../localization/LocalizationContext";

import "./Contact.css";
const CONTACT_EMAIL = "sohrabloee.b@gmail.com";

function Contact() {
  const { language, direction } = useLocalization();
  const isRTL = direction === "rtl";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const content = {
    en: {
      subtitle: "GET IN TOUCH",
      title: "Let's Work Together",
      description:
        "Have a project in mind or want to discuss an opportunity? Feel free to get in touch.",
      emailTitle: "Email Me",
      emailDescription: "Send me an email anytime.",
      locationTitle: "Location",
      locationDescription: "Available for remote opportunities.",
      formTitle: "Send Me a Message",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message",
      footerText: "Let's build something meaningful together.",
    },
    fa: {
      subtitle: "ارتباط با من",
      title: "بیایید با هم همکاری کنیم",
      description:
        "اگر ایده‌ای برای یک پروژه دارید یا مایل به بررسی فرصت همکاری هستید، خوشحال می‌شوم با من در ارتباط باشید.",
      emailTitle: "ایمیل",
      emailDescription: "در هر زمان می‌توانید برای من ایمیل ارسال کنید.",
      locationTitle: "موقعیت همکاری",
      locationDescription: "آماده همکاری در پروژه‌های دورکاری هستم.",
      formTitle: "برای من پیام بفرستید",
      name: "نام شما",
      email: "ایمیل شما",
      message: "پیام شما",
      namePlaceholder: "نام خود را وارد کنید",
      emailPlaceholder: "ایمیل خود را وارد کنید",
      messagePlaceholder: "درباره پروژه خود بنویسید...",
      submit: "ارسال پیام",
      footerText: "بیایید با هم چیز ارزشمندی بسازیم.",
    },
  };

  const t = content[language];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (CONTACT_EMAIL === "your-email@example.com") {
      alert(
        language === "fa"
          ? "ابتدا آدرس ایمیل واقعی خود را در فایل Contact.jsx وارد کنید."
          : "Please configure your email address in Contact.jsx first."
      );
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact - ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className={`contact-section ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="contact-container">

        <div className="contact-header">
          <span className="section-subtitle">{t.subtitle}</span>
          <h2>{t.title}</h2>
          <p>{t.description}</p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={23} />
              </div>

              <div>
                <h3>{t.emailTitle}</h3>
                <p>{t.emailDescription}</p>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={23} />
              </div>

              <div>
                <h3>{t.locationTitle}</h3>
                <p>{t.locationDescription}</p>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                {/* <Github size={20} /> */}
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                {/* <Linkedin size={20} /> */}
              </a>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>{t.formTitle}</h3>

            <div className="form-group">
              <label htmlFor="contact-name">{t.name}</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder={t.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">{t.email}</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">{t.message}</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              {t.submit}
              <Send size={17} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;