// import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import ContactForm from './pages/ContactForm';
import Project from './pages/Project';
import Resume from './pages/Resume';


function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
          

        </Routes>

      </main>



      <Footer />
    </>
  )
}






export default App;
