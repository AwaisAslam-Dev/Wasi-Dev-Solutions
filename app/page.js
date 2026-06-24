import Image from "next/image";
import Hero from "./components/Hero";
import MarqueeTicker from "./components/MarqueeTicker";
import OurServices from "./components/OurServices";
import Industries from "./components/Industries";
import OurProcess from "./components/OurProcess";
import CtaBanner from "./components/CtaBanner";

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
