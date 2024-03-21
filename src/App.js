import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About'
import ShoppingList from './pages/ShoppingList';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Catalog />

      <About />

      <ShoppingList />

      <Footer />

    </div>
  );
}

export default App;

