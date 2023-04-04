import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './pages/about';
import Contact from './pages/contactUs';
import Blog from './pages/blog';
import Signup from './pages/sign_up';
import Header from './header';
import Footer from './footer';
import PageNotFound from './404page';

export default function Routing(){
  return (
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
          </Routes>
        <Footer />
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);
