import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import styled from "styled-components";
import Iphone from "../components/threeJS/Iphone.js";
import Cheerios from "../components/threeJS/Cheerios.js";
import "./style.css";

function Home() {
  return (
    <>
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
      <br />
      <div className="container px-5">
        <div className="row px-5 mx-5">
          <div className="col-md-2 mx-5">
            <div className="card mx-5" style={{ width: "16rem" }}>
              <Canvas className="canvasIphone">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1.3} />
                <directionalLight position={[-2, 5, 2]} intensity={-1} />
                <Suspense fallback={null}>
                  <Iphone />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">IPhone</h5>
              </div>
            </div>
          </div>

          <div className="col-md-2 mx-5">
            <div className="card mx-5" style={{ width: "16rem" }}>
              <Canvas className="canvasIphone">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1.3} />
                <directionalLight position={[-2, 5, 2]} intensity={-1} />
                <Suspense fallback={null}>
                  <Cheerios />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">IPhone</h5>
              </div>
            </div>
          </div>

          <div className="col-md-2 mx-5">
            <div className="card mx-5" style={{ width: "16rem" }}>
              <Canvas className="canvasIphone">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1.3} />
                <directionalLight position={[-2, 5, 2]} intensity={-1} />
                <Suspense fallback={null}>
                  <Cheerios />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">IPhone</h5>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </>
  );
}


export default Home;
