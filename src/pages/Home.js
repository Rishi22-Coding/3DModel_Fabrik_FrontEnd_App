import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import styled from "styled-components";
import Iphone from "../components/threeJS/Iphone.js";
import Cheerios from "../components/threeJS/Cheerios.js";
import SwissMuseli from "../components/threeJS/SwissMuseli.js";
import SoftaSilk from "../components/threeJS/SoftaSilk.js";
import RiceRoni from "../components/threeJS/RiceRoni.js";
import FarFalle from "../components/threeJS/FarFalle.js";
import Minute from "../components/threeJS/Minute.js";
import NatureValley from "../components/threeJS/NatureValley.js";
import EarlGrey from "../components/threeJS/EarlGrey.js";
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
                <h5 className="card-title">Cheerios</h5>
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
                  <SwissMuseli />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">Swiss Museli</h5>
              </div>
            </div>
          </div>
          
        </div>

        <br />

        <div className="row px-5 mx-5">
          <div className="col-md-2 mx-5">
            <div className="card mx-5" style={{ width: "16rem" }}>
              <Canvas className="canvasIphone">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1.3} />
                <directionalLight position={[-2, 5, 2]} intensity={-1} />
                <Suspense fallback={null}>
                  <SoftaSilk />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">SoftaSilk</h5>
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
                  <RiceRoni />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">Rice Roni</h5>
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
                  <FarFalle />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">FarFalle</h5>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row px-5 mx-5">
          <div className="col-md-2 mx-5">
            <div className="card mx-5" style={{ width: "16rem" }}>
              <Canvas className="canvasIphone">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1.3} />
                <directionalLight position={[-2, 5, 2]} intensity={-1} />
                <Suspense fallback={null}>
                  <Minute />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">Minute</h5>
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
                  <NatureValley />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">Nature Valley</h5>
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
                  <EarlGrey />
                </Suspense>
              </Canvas>
              <div className="card-body">
                <h5 className="card-title">Earl Grey</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
      </>
  );
}


export default Home;
