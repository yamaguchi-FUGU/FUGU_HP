import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";

type HeaderProps = {
  title: string;
  sectionId: string;
};

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

  const sectionList: HeaderProps[] = [
    { title: "サークル概要", sectionId: "about" },
    { title: "活動内容", sectionId: "activities" },
    { title: "活動実績", sectionId: "achievements" },
    { title: "SNS Links", sectionId: "sns" },
  ];

  return (
    <header id="header" className="header">
      <div className="header-container">
        <div
          className="logo-container"
          onClick={() => scrollToSection("main-visual")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/images/fugu_for_header.png"
            alt="FUGU Logo"
            className="logo"
          />
        </div>

        {/* ハンバーガーメニューアイコン */}
        <RxHamburgerMenu onClick={toggleMenu} className="hamburger-menu" />

        {/* 通常のナビゲーション（デスクトップ） */}
        <nav className="desktop-nav">
          <ul className="nav-menu">
            {sectionList.map((section) => (
              <li key={section.sectionId}>
                <button
                  onClick={() => scrollToSection(section.sectionId)}
                  className="nav-link"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* モバイル用ドロップダウンメニュー */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-menu">
          {sectionList.map((section) => (
            <li key={section.sectionId}>
              <button
                onClick={() => scrollToSection(section.sectionId)}
                className="mobile-nav-link"
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
