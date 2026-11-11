import { useState } from "react";

import {
    Menu, Sun, Moon,
    X,
    ArrowUpRight,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

import { useLocalization } from    "../../localization/LocalizationContext";

import "./Header.css";



const Header = () => {

    const { theme, toggleTheme } = useTheme()

    const { language, changeLanguage, t } = useLocalization();

    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { id: "home", href: "#home" },
        { id: "about", href: "#about" },
        { id: "skills", href: "#skills" },
        { id: "projects", href: "#projects" },
        { id: "contact", href: "#contact" },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="header-container">

                {/* Logo */}
                <a
                    href="#home"
                    className="logo"
                    onClick={closeMenu}
                >
                    B<span>.</span>
                </a>

                {/* Navigation */}
                <nav
                    className={`nav ${menuOpen ? "nav-open" : ""}`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            {t.nav[item.id]}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="header-actions">

                    <button
                        className="language-button"
                        onClick={changeLanguage}
                        aria-label="Change language"
                    >
                        {language === "fa" ? "EN" : "FA"}
                    </button>
                    <button
                        type="button"
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={
                            theme === "light"
                                ? "Switch to dark theme"
                                : "Switch to light theme"
                        }
                        title={
                            theme === "light"
                                ? "Dark Mode"
                                : "Light Mode"
                        }
                    >
                        {theme === "light" ? (
                            <Moon size={19} />
                        ) : (
                            <Sun size={19} />
                        )}
                    </button>

                    <a
                        href="#contact"
                        className="hire-button"
                    >
                        {t.common.hireMe}
                        <ArrowUpRight size={16} />
                    </a>

                    {/* Mobile Menu */}
                    <button
                        className="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen
                            ? <X size={24} />
                            : <Menu size={24} />
                        }
                    </button>

                </div>
            </div>
        </header>
    );
};

export default Header;