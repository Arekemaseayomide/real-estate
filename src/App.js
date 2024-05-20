import './App.css';
import '../src/styles.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';


const App = () => {
  return ( <div className="app">
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Signup/>}/>
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
    <Footer />
</div>
  );
}

export default App;
 