import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Home from './components/Home';
import DogBreeds from './components/DogBreeds';
import Dog from './components/Dog';
import Payment from './components/Payment'
import SignupForm from './components/SignUpForm'
import Toys from './components/Toys'
import Treats from './components/Treats'
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Confirmation from './components/Confirmation';
import LoginForm from './components/LoginForm';
import CurrentUserProvider from './context/CurrentUser.js'



function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
      <BrowserRouter>
        <header>
          <div className='header'>
            <div className='titleheader'>
              <h1>Barking Boutique</h1>
            </div>
            <div className='logsign-btn'>
              <button className='login-btn'><Link to="/login">Log in</Link></button>
              <button className='signup-btn'><Link to="/signup">Sign up</Link></button>
              <button className='cart-btn'><Link to="/cart">Shopping Cart</Link></button>
            </div>
          </div>
        </header>

        <nav className='navbar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/treats">Treats</Link></li>
            <li><Link to="/toys">Toys</Link></li>
            <li><Link to="/dogbreeds">Dog Breeds</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href='https://pet-adoption-umzw.vercel.app/'>Pet Adoption</a></li>
          </ul>
        </nav>

        <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/treats" element={<Treats />} />
              <Route path="/toys" element={<Toys />} />
              <Route path="/dogbreeds" element={<DogBreeds />} />
              <Route path="/:name" element={<Dog />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
        </div>

      </BrowserRouter>
      </CurrentUserProvider>
    </div>
  );

}

export default App;