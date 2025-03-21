import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import CommunityPage from './pages/Community/CommunityPage';
import ContactPage from './pages/Contact/ContactPage';
import MainLayout from './components/layout/MainLayout';
import { LanguageProvider } from './contexts/LanguageContext';
import MultiStepForm from './components/forms/MultiStepForm';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <Home />
            </MainLayout>
          } />
          <Route path="/sobre" element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          } />
          <Route path="/servicos" element={
            <MainLayout>
              <ServicesPage />
            </MainLayout>
          } />
          <Route path="/comunidade" element={
            <MainLayout>
              <CommunityPage />
            </MainLayout>
          } />
          <Route path="/contato" element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          } />
          <Route path="/registro" element={
            <MainLayout>
              <MultiStepForm />
            </MainLayout>
          } />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
