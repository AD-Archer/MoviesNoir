import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Change HashRouter to BrowserRouter
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Generator from './pages/Generator';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navigation />
        <Container fluid className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;