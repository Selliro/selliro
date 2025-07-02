
import './App.css';
import { CustomCursor } from './components/common/customCursor';
import { useHeroAnimations, useFeaturesAnimations } from './components/common/animationHook';
import Selliro from './components/Seliro';
// import HeroArea from './components/HeroArea';
// import FeaturesArea from './components/FeaturesArea';
// import WorksArea from './components/WorksArea';
// import ServiceArea from './components/ServiceArea';
// import CtaArea from './components/CtaArea';

function App() {
    useHeroAnimations();
    // useFeaturesAnimations();
  return (
    <div className="App">
      <CustomCursor />
     {/* <HeroArea />
      <FeaturesArea />
      <WorksArea />
      <ServiceArea />
      <CtaArea /> */}
      <Selliro />
    </div>
  );
}

export default App;