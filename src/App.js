import './App.css';
import NavBar from './component/NavBar';
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import IPhone from "../src/component/IPhone"

function App() {
  return (
    <>
      <NavBar title={"3D Model Viewer Application"} />
        <Canvas className="Iphone-Canvas" style={{paddingTop: 1, paddingRight: 1200, height: "500px"}} >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <IPhone />
          </Suspense>
        </Canvas>
    </>
  );
}

export default App;
