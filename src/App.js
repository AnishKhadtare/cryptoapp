import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import CryptoNews from './pages/CryptoNews'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/coins/:id' element={<Coinpage></Coinpage>}></Route>
            <Route path='/trendingNews' element={<CryptoNews></CryptoNews>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;