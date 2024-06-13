import "./App.css";
import Navbar from "./Component/Mobilenav/Navbar";
import Hero from "./Hero/Hero";
import Skill from "./Component/Skill"
import ContactMw from "./Component/ContactMw";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Hero/>
      <Skill/>
      <ContactMw />
      <Footer />
     </div>
    </>
  );
}

export default App;
