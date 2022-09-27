// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Library from './components/Library';
import Player from './components/Player';
import Premium from './components/Premium';
import Recent from './components/Recent';
import Search from './components/Search';
import User from './components/User';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='library' element = {<Library />} />
    <Route path='search' element = {<Search />} />
    <Route path='premium' element = {<Premium />} />
    <Route path='user' element = {<User />} />
    <Route path='player' element = {<Player />} />
    <Route path='search/recent' element = {<Recent />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
