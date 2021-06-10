import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Expone from "./components/expone/expone";
import Testone from "./components/testone/testone";
import Exptwo from "./components/exptwo/exptwo";
import Testtwo from "./components/testtwo/testtwo";
import Subscribe from "./components/subscribe/subscribe";






import "./app.scss"

function App() {
  return (
    <div className="app">
      
      <Topbar/>
      <div className="sections">
      <Intro/>
      <Expone/>
      <Testone/>
      <Exptwo/>
      <Testtwo/>
      <Subscribe/>


      
      

      </div>
      
      


     
    </div>
  );
}

export default App;
