import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import DepthDitherFilter from './components/SvgFilters/DepthDitherFilter';

function App() {
  return (
    <BrowserRouter>
      <DepthDitherFilter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
