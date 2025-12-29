import Header from './components/Header';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Header/>
      <MaxWidthWrapper>
        <Hero/>
        <Projects/>
        <About/>
        <Contact/>
      </MaxWidthWrapper>
      <Footer/>
    </>
  )
}

export default App
