import { useState, useEffect } from "react";
import Catalogue from "./componant/Cat/Catalogue";
import Contenant from "./componant/Contenu/Contenu";
import Footer from "./componant/Foot/Footer";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleTechClick = (techName) => {
    const tech = data.find(
      (item) => item.name.toLowerCase() === techName.toLowerCase()
    );
    setSelectedTech(tech);
    setSelectedArticle(null);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
    setSelectedTech(null);
    Contenant;

  };

  return (
    <div className="layout">
   <Catalogue
  data={data}
  onTechClick={handleTechClick}
  onArticleClick={handleArticleClick}
  onBackClick={handleBackClick}
/>
      <div className="main-content">
       
        <Contenant
          tech={selectedTech}
          selectedArticle={selectedArticle}
          onArticleClick={handleArticleClick}
          
        />
        
        <Footer />
      </div>
    </div>
  );
}
