import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/index";
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
    </Router>
  );
}

export default App;
