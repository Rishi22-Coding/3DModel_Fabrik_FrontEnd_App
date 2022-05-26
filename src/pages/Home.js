import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import styled from "styled-components";
import Iphone from "../components/threeJS/Iphone.js";
import Cheerios from "../components/threeJS/Cheerios.js"
import './style.css'

function Home() {
  return (
    <div className="home">
      <div className="row d-flex justify-content-center text-center">
        <label for="formFile" className="form-label" style={{ fontSize: 30 }}>
          Upload Your 3d Model
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          style={{ width: 400 }}
        />
      </div>
      <Wrapper className="styled">
        <Canvas className="canvasIphone">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1.3} />
          <directionalLight position={[-2, 5, 2]} intensity={-1} />
          <Suspense fallback={null}>
            <Iphone />
          </Suspense>
        </Canvas>
        <Canvas className="canvasCheerios">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1.3} />
          <directionalLight position={[-2, 5, 2]} intensity={-1} />
          <Suspense fallback={null}>
            <Cheerios />
          </Suspense>
        </Canvas>
        <Canvas className="canvasIphone">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1.3} />
          <directionalLight position={[-2, 5, 2]} intensity={-1} />
          <Suspense fallback={null}>
            <Iphone />
          </Suspense>
        </Canvas>
        <Canvas className="canvasCheerios">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1.3} />
          <directionalLight position={[-2, 5, 2]} intensity={-1} />
          <Suspense fallback={null}>
            <Cheerios />
          </Suspense>
        </Canvas>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;

  canvasIphone {
    height: 800px;
  }
  canvasCheerios {
    height: 1000px;
  }
`;

export default Home;
