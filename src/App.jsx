import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Expone from "./components/expone/expone";
import Testone from "./components/testone/testone";






import "./app.scss"

function App() {
  return (
    <div className="app">
      
      <Topbar/>
      <div className="sections">
      <Intro/>
      <Expone/>
      <Testone/>


      
      

      </div>
      
      


     
    </div>
  );
}

export default App;
