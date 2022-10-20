import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import UpdatePage from './pages/UpdatePage';
import { RestaurantContextProvider } from './context/RestaurantContext';

function App() {
  return (
      <RestaurantContextProvider>
        <Router>
          <Routes>
            <Route  path="/" element={<Home></Home>} />
            <Route  path="/restaurant/:id/update" element={<UpdatePage></UpdatePage>} />
            <Route  path="/restaurant/:id" element={<Detail></Detail>} />
          </Routes>
        </Router>
      </RestaurantContextProvider>
  );
}

export default App;
