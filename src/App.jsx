import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Education from './components/Education.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
return (
<> <Navbar />

```
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Certifications />
    <Education />
    <Resume />

    {/* Certificates PDF Button */}
    <section
      id="all-certificates"
      style={{
        textAlign: 'center',
        padding: '50px 20px',
      }}
    >
      <h2>My Certifications</h2>

      <p>
        Explore my certificates in AI, Data Analytics,
        Cybersecurity, MongoDB, and Generative AI.
      </p>

      <a
        href="/certificates/Lavanya_Certifications_Portfolio.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '15px',
          padding: '12px 25px',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
        }}
      >
        View All Certificates
      </a>
    </section>

    <Contact />
  </main>

  <Footer />
</>
```

)
}
