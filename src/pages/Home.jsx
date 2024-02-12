import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/lsland";
import Sky from "../models/Sky";

{
  /* <div className="absolute right-0 z-10 flex items-center justify-center top-28 left-8">
        POPUP
      </div> */
}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [isLandScale, islandPosition, isRotation] = adjustIslandForScreenSize();

  return (
    <section className="relative w-full h-screen">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000"
            intensity={1}
          />
          <Sky />
          <Island
            scale={isLandScale}
            position={islandPosition}
            rotation={isRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
