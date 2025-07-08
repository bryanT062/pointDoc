import { useState } from "react";
import "./Catalogue.css";
import Logo from "../../assets/logo.png";

export default function Catalogue({ data, onTechClick, onArticleClick, onBackClick }) {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleTechClick = (techName) => {
    const tech = data.find((t) => t.name.toLowerCase() === techName.toLowerCase());
    setSelectedTech(tech);
    onTechClick(techName); 
  };

  const handleBackClick = () => {
    setSelectedTech(null);      
    onBackClick();              
  };

  return (
    <aside>
      <img id="logo" src={Logo} alt="Logo" />
      <hr />
      <h3>{selectedTech ? selectedTech.name : "Language / Code"}</h3>

      <div id="Catalogue">
        {!selectedTech ? (
          ["HTML", "CSS", "REACT", "JS", "GIT"].map((lang) => (
            <button key={lang} onClick={() => handleTechClick(lang)}>
              {lang}
            </button>
          ))
        ) : (
          <>
            <button onClick={handleBackClick} className="back-btn">←</button>
            {selectedTech.articles.map((article, index) => (
              <button
                key={index}
                onClick={() => onArticleClick(article)}
                className="article-btn"
              >
                {article.title}
              </button>
            ))}
          </>
        )}
      </div>
    </aside>
  );
}
