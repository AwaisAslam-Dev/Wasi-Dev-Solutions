import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/Hero"));
const MarqueeTicker = dynamic(() => import("./components/MarqueeTicker"));
const OurServices = dynamic(() => import("./components/OurServices"));
const Industries = dynamic(() => import("./components/Industries"));
const OurProcess = dynamic(() => import("./components/OurProcess"));
const CtaBanner = dynamic(() => import("./components/CtaBanner"));

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <OurServices />
      <Industries />
      <OurProcess/>
      <CtaBanner/>
    </>
  );
}
