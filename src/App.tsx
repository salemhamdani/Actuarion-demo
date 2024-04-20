import List from "./components/List";
import "./App.css";
import MainAppBar from "./components/AppBar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <MainAppBar />
      {/* <Carousel
        title="Insurance & Actuarial expertise"
        images={[
          window.location.origin + "/c1.jpg",
          window.location.origin + "/c2.jpg",
        ]}
      /> */}
      <List onDelete={() => {}} onEdit={() => {}} />
    </div>
  );
}

export default App;
