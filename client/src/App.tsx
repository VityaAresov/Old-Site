import { Reset } from 'styled-reset';
import GlobalStyle from './ui/GlobalStyle';
import { Header } from './layout/Header';
import Router from './router';
import Modal from './layout/Modal';
import { useEffect, useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { Footer } from './layout/Footer';
import { Route } from './router/routes';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => window.location.pathname !== Route.GetInTouch && setIsContactModalOpen(true), 40 * 1000);
  }, []);

  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <div className="app">
        <Modal isOpen={isContactModalOpen} handleClose={closeContactModal} lockScroll={true}>
          <ContactForm closeModal={closeContactModal} />
        </Modal>
        <Header />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
