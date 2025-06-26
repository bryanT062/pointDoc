import "./Catalogue.css";
import Logo from "../../assets/logo.png";

export default function Catalogue({ onTechClick }) {
  return (
    <aside>
      <img id="logo" src={Logo} alt="Logo" />
      <hr />
      <h3>Language / Code</h3>
      <div id="Catalogue">
        {["HTML", "CSS", "REACT", "JS", "GIT"].map((lang) => (
          <button key={lang} onClick={() => onTechClick(lang)}>
            {lang}
          </button>
        ))}
      </div>
    </aside>
  );
}
