import React, { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import './styles/variables.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import BackgroundStyles from './styles/BackgroundStyles';
import { theme } from './styles/theme';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SplashScreen from './components/SplashScreen/SplashScreen';

// Lazy load non-critical components
const Clients = lazy(() => import('./components/Clients/Clients'));
const About = lazy(() => import('./components/About/About'));
const Stats = lazy(() => import('./components/Stats/Stats'));
const Features = lazy(() => import('./components/Features/Features'));
const Pricing = lazy(() => import('./components/Pricing/Pricing'));
const FAQ = lazy(() => import('./components/FAQ/FAQ'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEssentialResources = async () => {
      try {
        // Load AOS only after initial render
        const AOS = (await import('aos')).default;
        await import('aos/dist/aos.css');
        await import('bootstrap-icons/font/bootstrap-icons.css');

        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });

        // Minimum splash screen time reduced to 500ms
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading resources:', error);
        setIsLoading(false);
      }
    };

    loadEssentialResources();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BackgroundStyles />
        <SplashScreen isLoading={isLoading} />
        {!isLoading && (
          <>
            <Header />
            <main className="main">
              <Hero />
              <Suspense fallback={null}>
                <Clients />
                <About />
                <Stats />
                <Features />
                <Pricing />
                <FAQ />
                <Testimonials />
                <Contact />
                <Footer />
              </Suspense>
            </main>
          </>
        )}
      </ThemeProvider>
    </Router>
  );
}

export default App;
