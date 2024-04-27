import "./App.css";
import Slider from "./Components/Slider";
import s from "../src/Style/Slider.module.css";
import img1 from "../src/assets/1.jfif";
import img2 from "../src/assets/2.jfif";
import img3 from "../src/assets/3.png";
function App() {
  return (
    <Slider>
      <div className="item ">
        <div className={s.slider_content}>
          <img src={img1} />
          <h1>Mini Drone</h1>
          <p>
            Powerful camera drone at an <br />
            affordable price range. Camera <br />
            up to 4K resolution, optimize shots <br />
            automatically.
          </p>
        </div>
      </div>
      <div className="item ">2</div>
      <div className="item ">3</div>
    </Slider>
  );
}

export default App;
