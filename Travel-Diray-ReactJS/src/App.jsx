import Header from "./components/Header";
import Entry from "./components/Entry"; 
import data from "./data.js";

const App = () => {

    const places = data.map(place => {
        return <Entry 
            key={place.id}
            {...place}
        />
    })

    return(
        <div className="main-container">
            <Header />
            <main>
                {places}
            </main>
        </div>
    );
}

export default App;