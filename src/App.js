import Header from "./Pages/Header/Header.jsx"
import Quality from "./Pages/Quality-Content/Quality.jsx"
import BrandTool from "./Pages/Tool/BrandTool.jsx";
import Stories from "./Pages/Story/Stories.jsx";
import SliderAbout from "./Pages/Slider/SliderAbout.jsx";
import FooterCompt from "./Pages/Footer/FooterCompt.jsx";

function App() {
  return (
    <div className="App">
        <Header/>
        <Quality/>
        <BrandTool/>
        <Stories/>
        <SliderAbout/>
        <FooterCompt/>
    </div>
  );
}

export default App;
