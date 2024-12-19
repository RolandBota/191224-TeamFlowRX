import React from "react";
import { Link } from "react-router-dom"; // Importiere Link für Navigation
import { useTranslation } from "react-i18next"; // Importiere useTranslation Hook
import "./Login.css"; // Importiere die CSS-Datei für das Styling

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="Login-page">
      {/* Oberer Balken */}
      <div className="header-bar"></div>

      {/* Inhalt der Beschreibung-Seite */}
      <div className="login-content">
        <h1>{t('software_description')}</h1>
        <p>{t('platform_description')}</p>
        <p>
          <strong>TeamFlow-XR</strong> <br />
           {/* Button RegisterLogin */}
           <Link to="/registerlogin" className="register-button">
            {t('register_login')}
          </Link> <br />
          {/* Button About Us */}
          <Link to="/about-us" className="about-button">
            {t('about_us')}
          </Link> <br />
          {/* Button Impressum */}
          <Link to="/impressum" className="impressum-button">
            {t('impressum')}
          </Link> <br />
                   
          *********
        </p>
        <p>
          {t('responsible_content')} <br />
            <br />
          **********************************************
        </p>
        <p>
          {t('disclaimer_text')}
        </p>

        {/* Button zur Startseite */}
        <div className="back-button-container">
          <Link to="/" className="back-button">
            {t('back_to_home')}
          </Link>
        </div>
      </div>

      {/* Unterer Balken */}
      <div className="footer-bar"></div>
    </div>
  );
};

export default LoginPage;
