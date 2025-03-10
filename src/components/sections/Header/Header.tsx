// src/components/sections/Header/Header.tsx
import "./Header.css";

export const Header = () => {

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header id="header" className="header">
            <div className="header-container">
                <div
                    className="logo-container"
                    onClick={() => scrollToSection("main-visual")}
                    style={{ cursor: 'pointer' }}
                >
                    <img
                        src="/images/fugu_for_header.png"
                        alt="FUGU Logo"
                        className="logo"
                    />
                </div>
                <nav className="navigation">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection("about")}
                                className="nav-link"
                            >
                                サークル概要
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection("activities")}
                                className="nav-link"
                            >
                                活動内容
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection("achievements")}
                                className="nav-link"
                            >
                                活動実績
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection("sns")}
                                className="nav-link"
                            >
                                SNS Links
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
