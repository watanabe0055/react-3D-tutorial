import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <section className="relative w-full h-screen">
      {/* <div className="absolute right-0 z-10 flex items-center justify-center top-28 left-8">
        POPUP
      </div> */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
