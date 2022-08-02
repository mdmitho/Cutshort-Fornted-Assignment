import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import Page3 from './Components/Page3/Page3';
import Page4 from './Components/Page4/Page4';

function App() {
  return (
    <div className="App bg-secondary">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="page4" element={<Page4 />} />
      </Routes>
    </div>
  );
}

export default App;
