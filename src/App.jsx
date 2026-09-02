import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import Project from './components/Project.jsx'
import Stack from './components/Stack.jsx'
import Earlier from './components/Earlier.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <Project />
        <Stack />
        <Earlier />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
