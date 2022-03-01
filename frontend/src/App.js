import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import { Header } from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <main className="py-3">
            <Container>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/product/:id" component={ProductScreen} />
            </Container>
          </main>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
