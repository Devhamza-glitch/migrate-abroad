import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import QuickRegister from './pages/QuickRegister';
import WorkAndStudy from './pages/WorkAndStudy';
// Layout component to include Navbar and Footer
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes wrapped in MainLayout with Navbar and Footer */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        

        <Route
          path="/contact-us"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

      <Route
          path="/quick-register"
          element={
            <MainLayout>
              <QuickRegister />
            </MainLayout>
          }
        />


      <Route
          path="/work-study-canada"
          element={
            <MainLayout>
              <WorkAndStudy />
            </MainLayout>
          }
        />
        
        
        {/* Route for NotFound without Navbar and Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
