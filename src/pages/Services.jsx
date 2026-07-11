import CoreServices from "../components/Services/CoreServices/Coreservices";
import CTA from "../components/Services/CTA/CTA";
import Hero from "../components/Services/Hero/Hero";
import Industries from "../components/Services/Industries/Industries";


export default function Services() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <CoreServices/>
      <Industries/>
      <CTA/>
    </main>
  );
}