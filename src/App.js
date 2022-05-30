// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
