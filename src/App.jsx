import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Men from './Components/Men/Men';
import Women from './Components/Women/Women'; // Fixed path
import Kids from './Components/Kids/Kids';
import Shop from './Components/Shop/Shop';
import Running from './Components/Running/Running';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/shopnow" element={<Shop/>}/>
          <Route path="/running" element={<Running/>}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
