import "./Contenu.css";

export default function Contenant({ tech, selectedArticle, onArticleClick, onBackClick }) {
  return (
    <>
      <div className="contenu">
        <h1>QUE SOUHAITE TU APPRENDRE ?</h1>
      </div>
      <div id="mon_contenu">
        {selectedArticle ? (
          <>
            {/* Bouton croix pour revenir */}
            <button className="close-button" onClick={onBackClick} aria-label="Retour à la liste">
              ✕
            </button>

            <h2>{selectedArticle.title}</h2>
            <hr />
            <p>{selectedArticle.description}</p>
          </>
        ) : tech ? (
          <>
            <h2>{tech.name}</h2>
            <hr />
            {tech.articles.map((article, index) => (
              <div
                key={index}
                className="article"
                style={{ cursor: "pointer", marginBottom: "1rem" }}
                onClick={() => onArticleClick(article)}
              >
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            <h2>APPRENDRE À CODER</h2>
            <hr />
            <input
              type="text"
              placeholder="RECHERCHE PLUS RAPIDEMENT ex: HTML"
            />
          </>
        )}
      </div>
    </>
  );
}
