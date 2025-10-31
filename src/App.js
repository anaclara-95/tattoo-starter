import React, { useState } from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Skills from './components/Skills';
import Interview from './components/Interview';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDemoClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <section id="home">
        <Hero onDemoClick={handleDemoClick} />
      </section>
      <section id="about">
        <About onDemoClick={handleDemoClick} />
      </section>
      <section id="gallery">
        <GallerySection onDemoClick={handleDemoClick} />
      </section>
      <section id="services">
        <Skills />
      </section>
      <Testimonial />
      <section id="interview">
        <Interview />
      </section>
      <section id="contact">
        <Contact onDemoClick={handleDemoClick} />
      </section>
      <Footer onDemoClick={handleDemoClick} />
      <Copyright />


      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-sm text-center">
            <p className="text-base mb-4">
              Estos botones son sólo parte del diseño, pensados para mostrar al
              cliente cómo podrían funcionar las secciones interactivas de su
              página web.
            </p>
            <button
              onClick={closeModal}
              className="bg-black text-white px-6 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
