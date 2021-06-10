import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Expone from "./components/expone/expone";
import Testone from "./components/testone/testone";
import Exptwo from "./components/exptwo/exptwo";






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


      
      

      </div>
      
      


     
    </div>
  );
}

export default App;
