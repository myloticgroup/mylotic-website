import Navbar from "../layout/Navbar";
import Hero from "../components/Hero/Hero";

import WhyUs from "../components/Hero/WhyUs";
import Tech from "../components/Hero/Tech";
import Approach from "../components/Hero/Approach";
import Client from "../components/Hero/client";


export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs/>
     
      <Tech/>
      <Approach/>
      <Client/>

    </>
  );
}