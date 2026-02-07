import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Console from './Console';
import Front from './Front';
import Back from './Back';
import Libraries from './Libraries';
import InternshipCerts from './InternshipCerts';
import Certificate from './Certificate';
import Realtime from './Realtime';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/intern" element={<InternshipCerts />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/front" element={<Front />} />
        <Route path="/project/back" element={<Back />} />
        <Route path="/project/console" element={<Console />} />
        <Route path="/project/libraries" element={<Libraries />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/project/realtime" element={<Realtime />} />
      </Routes>
    </Router>
  );
}

export default App;
