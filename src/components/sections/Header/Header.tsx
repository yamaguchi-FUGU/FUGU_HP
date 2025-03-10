// src/components/sections/Header/Header.tsx
import { useState } from "react";
import "./Header.css";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        // メニューを閉じる
        setIsMenuOpen(false);
    };

    // メニューの開閉を切り替える
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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

                {/* ハンバーガーメニューアイコン */}
                <div
                    className="hamburger-menu"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* 通常のナビゲーション（デスクトップ） */}
                <nav className="navigation desktop-nav">
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

            {/* モバイル用ドロップダウンメニュー */}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-menu">
                    <li className="mobile-nav-item">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="mobile-nav-link"
                        >
                            サークル概要
                        </button>
                    </li>
                    <li className="mobile-nav-item">
                        <button
                            onClick={() => scrollToSection("activities")}
                            className="mobile-nav-link"
                        >
                            活動内容
                        </button>
                    </li>
                    <li className="mobile-nav-item">
                        <button
                            onClick={() => scrollToSection("achievements")}
                            className="mobile-nav-link"
                        >
                            活動実績
                        </button>
                    </li>
                    <li className="mobile-nav-item">
                        <button
                            onClick={() => scrollToSection("sns")}
                            className="mobile-nav-link"
                        >
                            SNS Links
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};
