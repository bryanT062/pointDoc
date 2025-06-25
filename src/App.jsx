import Doc from "./pages/Doc.jsx"
import Footer from "./componant/Foot/Footer.jsx"
import Navbar from "./componant/Nav/Navbar.jsx"
import './App.css'
import Contenant from "./componant/Contenu/Contenu.jsx"



export default function App() {
  return (
    <>
      <Doc />
      <div className="main-content">
        <Navbar></Navbar>
        <Contenant />
        
       
        <Footer />
      </div>
    </>
  );
}


