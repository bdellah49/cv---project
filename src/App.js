import './App.css';
import Header from './components/header.js'
import General from './components/general';
import EdExperience from "./components/ed-experience";
import PracticalExp from "./components/practical-exp";


function App() {
  return (
    <div className="App">
      <Header className="header" />
      <General className="general" />
      <EdExperience className="ed-exp" />
      <PracticalExp className="practical-exp" />
    </div>
  );
}

export default App;
