import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Test from './pages/Test';
import DepthDitherFilter from './components/SvgFilters/DepthDitherFilter';

function App() {

  React.useEffect(() => {
   var _mtm = window._mtm = window._mtm || [];
   _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
   var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
   g.async=true; g.src='https://cdn.matomo.cloud/jeremybourqui.matomo.cloud/container_W1WW5Olx.js'; s.parentNode.insertBefore(g,s);
  }, [])


  return (
    <BrowserRouter>
      <DepthDitherFilter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
