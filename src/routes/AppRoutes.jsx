import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import About from '../pages/About.jsx';
import Certifications from '../pages/Certifications.jsx';
import Contact from '../pages/Contact.jsx';
import Freelance from '../pages/Freelance.jsx';
import Home from '../pages/Home.jsx';
import Projects from '../pages/Projects.jsx';
import Skills from '../pages/Skills.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="freelance" element={<Freelance />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
