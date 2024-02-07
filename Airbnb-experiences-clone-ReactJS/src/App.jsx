import Navbar from "./components/Navbar";
import Collage from "./components/collage";
import Info from "./components/Info";
import Card from "./components/Card.jsx"
import "./index.css";
import data from "./data.js";

function App() {

  const cards = data.map((card) => {
    return <Card 
        key = {card.id}
        {...card}  
    />
  });


  return(
    <div className="main-container">
      <Navbar />
      <Collage />
      <Info />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
