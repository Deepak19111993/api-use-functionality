import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import RouteConstant from './RouteConstant';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteConstant />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
