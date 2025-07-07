import "./Contenu.css";

export default function Contenant({ tech, selectedArticle, onArticleClick }) {
  return (
    <>
      <div className="contenu">
        <h1>QUE SOUHAITE TU APPRENDRE ?</h1>
      </div>
      <div id="mon_contenu">
        {selectedArticle ? (
          <>

            <div dangerouslySetInnerHTML={{ __html: selectedArticle.description }} />
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
                <div dangerouslySetInnerHTML={{ __html: article.description }} />
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
